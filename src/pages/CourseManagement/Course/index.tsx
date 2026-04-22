import React, { useEffect } from 'react';
import { Space } from 'antd';
import { useDispatch } from 'umi';
import Filter from './components/Filter';
import TableComp from './components/Table';
import ModalComp from './components/Modal';

const CoursePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'courseManagement.course/fetch',
    });
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Filter />
      <TableComp />
      <ModalComp />
    </Space>
  );
};

export default CoursePage;