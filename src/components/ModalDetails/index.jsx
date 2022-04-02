import imageTmp from "assets/images/mo-gia-toc.jpeg";
import ButtonCustom from "components/ButtonCustom";
import Helmet from "components/Helmet";
import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDetailByHomeId } from "services/firebase";

const ModalDetails = ({ show, handleShowModalCheckout }) => {
  const [homeDetail, setHomeDetail] = useState([]);

  const { demoId } = useParams();

  useEffect(() => {
    async function demo() {
      const detail = await getDetailByHomeId(demoId);
      setHomeDetail(detail);
    }

    demo();
  }, [demoId]);

  console.log("homeDetail", homeDetail);

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
          <h1>
            {homeDetail[0]?.homeName
              ? homeDetail[0]?.homeName
              : "Không tìm thấy dữ liệu"}
          </h1>
          {/* <Row className="modal-details--row-1">
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
          </Row> */}
        </Modal.Body>
      </Modal>
    </Helmet>
  );
};

export default ModalDetails;
