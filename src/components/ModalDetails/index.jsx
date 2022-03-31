import imageTmp from "assets/images/mo-gia-toc.jpeg";
import ButtonCustom from "components/ButtonCustom";
import Helmet from "components/Helmet";
import React from "react";
import { Col, Modal, Row } from "react-bootstrap";

const ModalDetails = ({ show, handleShowModalCheckout }) => {
  return (
    <Helmet title="Detail">
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
        className="modal-details"
      >
        <Modal.Header>
          <Modal.Title>Chi tiết dự án</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="modal-details--row-1">
            <Col>
              <Row>
                <Col>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Mã</span>
                    M7-05-01-07
                  </ButtonCustom>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Loại</span>
                    Đang cập nhật
                  </ButtonCustom>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Số Huyệt</span>
                    Đang cập nhật
                  </ButtonCustom>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonCustom classCustom="w-100" type="primary">
                    <span>Hướng</span>
                    Đang cập nhật
                  </ButtonCustom>
                </Col>
              </Row>
            </Col>
            <Col>
              <div
                className="img-wrapper"
                style={{ backgroundImage: `url(${imageTmp})` }}
              />
            </Col>
          </Row>
          <Row className="modal-details--row-2">
            <Col>
              <ButtonCustom classCustom="w-100" type="primary">
                <span>Giá</span>
                Liên hệ
              </ButtonCustom>
            </Col>
            <Col>
              <ButtonCustom classCustom="w-100" type="primary">
                <span>Trạng thái</span>
                Mở bán
              </ButtonCustom>
            </Col>
          </Row>
          <Row className="modal-details--row-3">
            <Col>
              <ButtonCustom
                classCustom="w-100"
                type="secondary"
                onClick={handleShowModalCheckout}
              >
                ĐẶT MUA NGAY
              </ButtonCustom>
            </Col>
          </Row>
          <Row className="modal-details--row-4">
            <Col>
              <ButtonCustom
                classCustom="w-100"
                type="secondary"
                onClick={handleShowModalCheckout}
              >
                ĐẶT MUA
              </ButtonCustom>
            </Col>
            <Col>
              <ButtonCustom classCustom="w-100" type="secondary">
                LIÊN HỆ
              </ButtonCustom>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Helmet>
  );
};

export default ModalDetails;
