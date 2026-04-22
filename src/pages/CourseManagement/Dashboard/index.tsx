import React, { useEffect } from 'react';
import { Col, Row, Space } from 'antd';
import { useDispatch } from 'umi';
import Overview from './components/Overview';
import QuickAccess from './components/QuickAccess';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import TableComp from './components/Table';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'courseManagement.course/fetch',
    });
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Overview />
      <QuickAccess />

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={10}>
          <PieChart />
        </Col>
        <Col xs={24} xl={14}>
          <BarChart />
        </Col>
      </Row>

      <TableComp />
    </Space>
  );
};

export default DashboardPage;