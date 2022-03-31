import ButtonCustom from "components/ButtonCustom";
import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { ReactComponent as ArrowBackIcon } from "assets/icons/arrow-back.svg";
import Helmet from "components/Helmet";

const ModalCheckout = ({ show, handleBack }) => {
  const [stateForm, setStateForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleClickBuyNow = () => {
    window.alert(JSON.stringify(stateForm));
  };

  return (
    <Helmet title="Checkout">
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
        className="modal-checkout"
      >
        <Modal.Header>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={4}>
              <div className="modal-checkout-left">
                <div className="modal-checkout-left--box-content">
                  <Button className="btn-back" onClick={handleBack}>
                    <span>
                      <ArrowBackIcon />
                    </span>
                    Quay lại
                  </Button>
                  <h1 className="modal-checkout-left--title">
                    Thông tin sản phẩm
                  </h1>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Mã</span>
                    M7-05-01-07
                  </ButtonCustom>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Loại</span>
                    Đang cập nhật
                  </ButtonCustom>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Số Huyệt</span>
                    Đang cập nhật
                  </ButtonCustom>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Hướng</span>
                    Đang cập nhật
                  </ButtonCustom>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Giá</span>
                    Liên hệ
                  </ButtonCustom>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <form>
                <div className="modal-checkout-right">
                  <Row>
                    <Col lg={12}>
                      <div className="modal-checkout-right--box-content modal-checkout-right--top">
                        <div className="title">
                          Hãy cho chúng tôi biết thông tin của bạn:
                        </div>
                        <div className="form-info">
                          <div className="form-group">
                            <label htmlFor="name">Họ tên</label>
                            <div className="form-control">
                              <input
                                type="text"
                                placeholder="Nhập họ tên"
                                value={stateForm.name}
                                required
                                onChange={(e) =>
                                  setStateForm({
                                    ...stateForm,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Số điện thoại</label>
                            <div className="form-control">
                              <input
                                type="text"
                                placeholder="Nhập số điện thoại..."
                                value={stateForm.phone}
                                onChange={(e) =>
                                  setStateForm({
                                    ...stateForm,
                                    phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <div className="form-control">
                              <input
                                type="text"
                                placeholder="Nhập Email..."
                                value={stateForm.email}
                                onChange={(e) =>
                                  setStateForm({
                                    ...stateForm,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Địa chỉ liên hệ</label>
                            <div className="form-control">
                              <input
                                type="text"
                                placeholder="Nhập địa chỉ"
                                value={stateForm.address}
                                onChange={(e) =>
                                  setStateForm({
                                    ...stateForm,
                                    address: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sub-title">
                          Bằng cách gửi thông tin cho chúng tôi. Bạn sẽ được giữ
                          chỗ cho vị trí này trong vòng 2h. Nhân viên của chúng
                          tôi sẽ liên hệ với bạn để tiến hành các thủ tục tiếp
                          theo ngay sau khi nhận được yêu càu của bạn.
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="modal-checkout-right--box-content modal-checkout-right--bottom">
                        <ButtonCustom
                          classCustom="w-100"
                          type="secondary"
                          onClick={handleClickBuyNow}
                        >
                          ĐẶT GIỮ CHỖ
                        </ButtonCustom>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Helmet>
  );
};

export default ModalCheckout;
