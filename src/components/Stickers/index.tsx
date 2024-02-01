import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MyButton from "../MyButton";
// import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../Form";

export const ButtonStyle = styled(Button)`
  &.ant-btn-default {
    font-family: "Noto Serif", serif;
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    color: var(--white);
    padding: 10px 40px;
    height: fit-content;
    &:hover,
    &:focus,
    &:active {
      color: var(--grey-light);
    }

    // Style the span inside the button
    span {
      text-decoration: none; // Remove underline
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;

const Stickers = () => {
  const limit = 5;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();

  interface DataType {
    title: string;
    url: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Sticker",
      dataIndex: "url",
      key: "url",
      render: (text) => (
        <img src={text} alt="Sticker" style={{ width: "50px" }} />
      ),
    },
  ];

  const getStickers = async (page: number, limit: number) => {
    const apiKey = "gRsIU8cXoEQLPymOgO4ayfzGAKvCtS2Y";
    let offset = (page - 1) * limit;
    const {
      data: { data: stickers },
    } = await axios.get(
      `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}&offset=${offset}&limit=${limit}`
    );

    const formattedData: DataType[] = stickers.map((sticker: any) => ({
      title: sticker.title,
      url: sticker.images.fixed_height.url,
    }));
    setDataSource(formattedData);
  };

  useEffect(() => {
    getStickers(page, limit);
  }, [page, limit]);

  return (
    <>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <Buttons>
        <MyButton
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page == 1}
        >
          Back
        </MyButton>
        <MyButton onClick={() => setPage((prev) => prev + 1)}>Forward</MyButton>{" "}
      </Buttons>
    </>
  );
};

export default Stickers;
