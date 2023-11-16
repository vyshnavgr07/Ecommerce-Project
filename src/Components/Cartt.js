import React, { useContext } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Data } from '../App';


const Cartt = () => {
  const { cart, setcart, product, vieworder, setvieworder } = useContext(Data);
  const navigate = useNavigate();

  const removeTask = (index) => {
    const newTask = [...cart];
    newTask.splice(index, 1);
    setcart(newTask);
    toast.error('Your product is Removed');
  };

  const handleinc = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cart.map((item) => {
      if (item.id === x) {
        if (item.quantity < item.stock) {
          item.quantity += 1;
          item.newPrice = parseFloat(productprice.newPrice) * item.quantity;
        }
      }
      return item;
    });
    setcart(updatecart);
  };

  const handledec = (x) => {
    const productprice = product.find((item) => item.id === x);
    const updatecart = cart.map((item) => {
      if (item.id === x) {
        if (item.quantity <= item.stock && item.quantity > 1) {
          item.quantity -= 1;
          item.newPrice = parseFloat(productprice.newPrice) * item.quantity;
        }
      }
      return item;
    });
    setcart(updatecart);
  };

  const reducer = cart.reduce((acc, curr) => acc + curr.newPrice, 0);

  const clearcart = (index) => {
    const clearTask = [...cart];
    clearTask.splice(index, clearTask.length);
    setcart(clearTask);
    toast.success('Your Cart is Empty');
  };

  const order = () => {
    navigate('/payment');
    setvieworder(cart);
  };

  return (
    <div>
      <section className="navu h-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning">TOTAL </span>
                    <a href="#!" className="text-danger">
                      {reducer} <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {cart.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBCardImage className="rounded-3" fluid src={item.img} alt="products" />
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="8">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{' '}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4" className="d-flex align-items-center justify-content-around">
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handledec(item.id)}>
                          -
                        </button>
                        <span className="border border-secondary p-3">{item.quantity}</span>
                        <button className="border border-secondary p-2 m-1" variant="danger" onClick={() => handleinc(item.id)}>
                          +
                        </button>
                      </MDBCol>
                      <MDBCol md="12" lg="6" xl="4">
                        <MDBTypography tag="h5" className="mb-0">
                          {item.newPrice}
                        </MDBTypography>
                      </MDBCol>

                      <MDBCol md="12" lg="6" xl="4" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon onClick={() => removeTask(cart.indexOf(item))} icon="trash text-danger" size="lg" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div>
        <h1>TOTAL {reducer}</h1>
        <button className="bg-warning m-2" onClick={clearcart}>
          ClearCart
        </button>
        <button className="bg-success" onClick={order}>
          Buy ALL
        </button>
      </div>
    </div>
  );
};

export default Cartt;
