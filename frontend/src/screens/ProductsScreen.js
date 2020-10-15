import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [points, setPoints] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setPoints(product.points);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        points,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <div className="content content-margined">
      <div className="">
        
        <button className="button primary" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        // <div className="form" style = {{
        //   marginLeft : "400px"
        // }}>
          <div>
         <h1 className="create-product">Create Product</h1>
          <form onSubmit={submitHandler}>
            <div >
          <div class="container ">
            <div class="form">
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
                
                <div class="form-content product-container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                              <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  class="form-control" 
                                  placeholder="Your Name *"
                                  name="name"
                                  value={name}
                                  id="name"
                                  onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                                {/* <input type="text" class="form-control" placeholder="Your Name *" value=""/> */}
                            
                            
                            <div class="form-group">
                              <label htmlFor="price">Price</label>
                                <input
                                  type="text"
                                  class="form-control" 
                                  placeholder="Price *"
                                  name="price"
                                  value={price}
                                  id="price"
                                  onChange={(e) => setPrice(e.target.value)}
                                />
                                {/* <input type="text" class="form-control" placeholder="Phone Number *" value=""/> */}
                            </div>
                            <div class="form-group">
                            <label htmlFor="points">Points</label>
                            <input
                              type="text"
                              class="form-control" 
                              placeholder="Points *"
                              name="price"
                              value={points}
                              id="points"
                              //onChange={(e) => setPoints(e.target.value)}
                              onChange={(e) => setPoints(0.10 * price)}
                            />
                                {/* <input type="text" class="form-control" placeholder="Phone Number *" value=""/> */}
                            </div>
                            <div class="form-group">
                              <label htmlFor="image">Image</label>
                                    <input
                                      type="text"
                                      class="form-control" 
                                      placeholder="Image *"
                                      name="image"
                                      value={image}
                                      id="image"
                                      onChange={(e) => setImage(e.target.value)}
                                    />
                              <input type="file" class="form-control" onChange={uploadFileHandler}></input>
                              {uploading && <div>Uploading...</div>}
                                {/* <input type="text" class="form-control" placeholder="Phone Number *" value=""/> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label htmlFor="brand">Brand</label>
                              <input
                                type="text"
                                class="form-control" 
                                placeholder="Brand *"
                                name="brand"
                                value={brand}
                                id="brand"
                                onChange={(e) => setBrand(e.target.value)}
                              />
                                {/* <input type="text" class="form-control" placeholder="Your Password *" value=""/> */}
                            </div>
                            <div class="form-group">
                            <label htmlFor="countInStock">Count In Stock</label>
                              <input
                                type="text"
                                class="form-control" 
                                placeholder="CountInStock *"
                                name="countInStock"
                                value={countInStock}
                                id="countInStock"
                                onChange={(e) => setCountInStock(e.target.value)}
                              />
                                {/* <input type="text" class="form-control" placeholder="Confirm Password *" value=""/> */}
                            </div>
                            <div class="form-group">
                            <label htmlFor="name">Category</label>
                              <input
                                type="text"
                                class="form-control" 
                                placeholder="Category *"
                                name="category"
                                value={category}
                                id="category"
                                onChange={(e) => setCategory(e.target.value)}
                              />
                                {/* <input type="text" class="form-control" placeholder="Phone Number *" value=""/> */}
                            </div>
                            <div class="form-group">
                            <label htmlFor="description">Description</label>
                              <textarea
                                name="description"
                                class="form-control" 
                                placeholder="Description *"
                                value={description}
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                              />
                                {/* <input type="text" class="form-control" placeholder="Phone Number *" value=""/> */}
                            </div>
                        </div>

                      
                    </div>
                                         
                                 
                    <button type="submit" class="btnSubmit" className="btnSubmit" style={{ marginLeft: "10rem"}} >
                      {id ? 'Update' : 'Create'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalVisible(false)}
                      class="btnSubmit"
                      style={{ marginRight: "5rem",marginLeft: "5rem" }}
                     >
                     Back
                    </button>
                </div>
            </div>
        </div>
            {/* <div className="row form-c">
              
                <div className="col-sm">
                  
                  <ul className="form-container">
                      
                      <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                      </li>

                      <li>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        <label htmlFor="price">Price</label>
                        <input
                          type="text"
                          name="price"
                          value={price}
                          id="price"
                          onChange={(e) => setPrice(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        <label htmlFor="points">Points</label>
                        <input
                          type="text"
                          name="price"
                          value={points}
                          id="points"
                          //onChange={(e) => setPoints(e.target.value)}
                          onChange={(e) => setPoints(0.10 * price)}
                        ></input>
                      </li>
                      <li>
                    <label htmlFor="image">Image</label>
                    <input
                      type="text"
                      name="image"
                      value={image}
                      id="image"
                      onChange={(e) => setImage(e.target.value)}
                    ></input>
                    <input type="file" onChange={uploadFileHandler}></input>
                    {uploading && <div>Uploading...</div>}
                    </li>
                  </ul>
                </div>

                <div className="col-sm">
                  
                  <ul className="form-container">
                
              <li>
                <br/>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="name">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
             
              <br/>
              <br/>
              <br/>
              <br/>
              <button type="submit" className="button primary create-product-button" >
                  {id ? 'Update' : 'Create'}
              </button>
              <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary  create-product-button"
                >
                  Back
              </button>
            </ul>
                </div>*/}
                
            </div> 
              
             
            </form> 
            
        </div> 
        
        
            

         
        
      )}
      <div className="product-list">
        <h3>Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Points</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.points}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
        </div>
  );
  
}

export default ProductsScreen;

    