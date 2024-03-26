import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../components/Pdf";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {InputFlex, PdfFormContainer, StyledInput, StyledInputTypeFile, SubmitButton} from "./style.tsx";
import {IMyForm} from "./types.tsx";



const PdfPage: React.FC = () => {
  const [task, setTasks] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement = (data: IMyForm) => {
    console.log(data);

    setTasks(data);
  };
  console.log(task?.picture);

  return (
    <>
      <PdfFormContainer>
        <form onSubmit={handleSubmit(saveElement)}>
          <InputFlex>
            {/*/!*  <StyledInput*!/*/}
            {/*/!*    type="file"*!/*/}
            {/*    {...register("picture", {*/}
            {/*      required: "Поле обязательно для заполнения",*/}
            {/*    })}*/}
            {/*/>*/}
            <StyledInputTypeFile
                htmlFor="fileInput"  // Связываем метку с файловым вводом
                {...register("picture", {
                  required: "Поле обязательно для заполнения",
                })}
            >
              <span className="upload-icon">📁</span>Upload photo
              <input id="fileInput" type="file" {...register("picture", {
                required: "Поле обязательно для заполнения",
              })}/>
            </StyledInputTypeFile>
            <div>{errors.picture?.message}</div>

            <StyledInput
                placeholder="Enter your name"
                {...register("name", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 5,
                    message: "Нужно больше символов",
                  },
                })}
            />
            <div>{errors.name?.message}</div>
            <StyledInput
                placeholder="Enter your age"
                {...register("age", {
                  required: "Поле обязательно для заполнения",
                })}
            />
            <StyledInput placeholder="Enter your birthday date in format dd.mm.yy"    {...register("birthday", {
              required: "Поле обязательно для заполнения",
            })}/>


            <div>{errors.age?.message}</div>


            <div>
              <label>
                <input
                    type="radio"
                    value="man"
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                />
                Man
              </label>
              <label>
                <input
                    type="radio"
                    value="women"
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                />
                Women
              </label>
            </div>
            <div>{errors.gender?.message}</div>

          </InputFlex>


          <SubmitButton type="submit">Save</SubmitButton>
        </form>
      </PdfFormContainer>


      {!!task?.name && (
          <PDFDownloadLink
              document={
                <MyDocument
                    age={task?.age}
                    name={task?.name}
                    birthday={task?.birthday}
                    gender={task?.gender}
                    picture={URL.createObjectURL(task?.picture[0])}
                />
              }
              fileName="somename.pdf"

          >
            {({blob, url, loading, error}) =>
                loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
      )}
    </>
  );
};

export default PdfPage;
