import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Spin, message } from 'antd';
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProSaasCard from '../../../components/Common/ProCard';
import Button from '../../../components/Common/buttons/SecondaryButton';
import Card from '../../../components/Common/Card';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextInput from '../../../components/Common/forms/TextInput';
import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
import ErrorText from '../../../components/Common/errorText';

const { Column } = Table;

const ValidSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required')
});

const ButtonWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: left;
`;

const RemoveUserButton = styled.button`
  cursor: pointer;
  background-color: red;
  color: white;
  font-weight: 500;
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: none;
`;

const dummyData = [
  { email: 'email1', username: 'username1', role: 'admin' },
  { email: 'email2', username: 'username2', role: 'user' },
  { email: 'email3', username: 'username3', role: 'admin' }
];

const Users = () => {
  const isLoading = false;

  const [appUsers, _] = useState(dummyData);

  const handleSubmit = async () => {};

  const getAppUsers = async () => {};

  const removeUserRole = async () => {};

  return (
    <div>
      <ProSaasCard title="User management available in Pro Version" />
      <h1>Users</h1>
      <Card>
        <Spin tip="Loading..." spinning={isLoading}>
          <h2>Invite User</h2>
          <Formik
            validationSchema={ValidSchema}
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FieldLabel htmlFor="email">Email:</FieldLabel>
                <InputWrapper>
                  <TextInput
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </InputWrapper>
                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}

                <ButtonWrapper>
                  <Button type="submit">Submit </Button>
                </ButtonWrapper>
              </form>
            )}
          </Formik>
        </Spin>
      </Card>
      <Card>
        <Spin tip="Loading..." spinning={isLoading}>
          <h2>Get App Users</h2>
          <Button onClick={getAppUsers}>Submit</Button>

          <Table dataSource={appUsers}>
            <Column title="" key="avatar" render={() => <UserOutlined />} />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Username" dataIndex="username" key="username" />
            <Column title="Role" dataIndex="role" key="role" />
            <Column
              title="Actions"
              key="action"
              render={(row) => (
                <div>
                  <RemoveUserButton onClick={() => removeUserRole(row.id)}>Remove</RemoveUserButton>
                </div>
              )}
            />
          </Table>
        </Spin>
      </Card>
    </div>
  );
};

export default Users;
