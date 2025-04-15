import React, { useState } from "react";
import { Button, Modal } from "antd";

const ResetButton = ({ onReset }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    onReset();
    setIsModalVisible(false);
  };
  return (
    <>
      <Button onClick={showModal} danger style={{ marginLeft: 10 }}>
        Сбросить данные
      </Button>
      <Modal
        title="Подтверждение сброса"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Сбросить"
        cancelText="Отмена"
        maskClosable={false}
      >
        <p>Вы уверены, что хотите сбросить все данные? Это действие нельзя отменить.</p>
      </Modal>
    </>
  );
};

export default ResetButton;
