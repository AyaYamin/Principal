import React, { Component } from "react";
import classnames from "classnames";

const products = [
  { id: "1", name: "TV", price: 20000, qa: "45", qr: "78", vendor: "Samsung" },
  {
    id: "2",
    name: "Mobile",
    price: 15000,
    qa: "50",
    qr: "88",
    vendor: "Motorola"
  },
  { id: "3", name: "Hard Disc", price: 5000, qa: "20", qr: "30", vendor: "WD" },
  {
    id: "4",
    name: "Laptop",
    price: 55000,
    qa: "200",
    qr: "130",
    vendor: "Lenovo"
  },
  {
    id: "5",
    name: "Home Theater",
    price: 25000,
    qa: "53",
    qr: "13",
    vendor: "Sony"
  },
  {
    id: "6",
    name: "Headphone",
    price: 2400,
    qa: "43",
    qr: "32",
    vendor: "Bose"
  },
  { id: "7", name: "Keyboard", price: 399, qa: "12", qr: "54", vendor: "Dell" },
  { id: "8", name: "Mouse", price: 199, qa: "20", qr: "9", vendor: "Dell" }
];

class List extends Component {
  state = {
    active: null,
    price: null,
    qa: null,
    qr: null,
    products: products,
    originalProducts: products,
    idsort: false,
    pricesort: false,
    namesort: false,
    nameString: "",
    idString: "",
    priceString: "",
    currentPage: 1,
    todosPerPage: 4,
    totalLength: products.length,
    indexOfFirstTodo: null,
    indexOfLastTodo: null,
    isLast: false,
    isFirst: false,
    searchString: ""
  };

  editClicked = item => {
    this.setState({
      ...this.state,
      active: item.id,
      price: item.price,
      qa: item.qa,
      qr: item.qr
    });
  };

  changed = (event, type) => {
    if (type === "price") {
      this.setState({ ...this.state, price: event.target.value });
    }
    if (type === "qa") {
      this.setState({ ...this.state, qa: event.target.value });
    }
    if (type === "qr") {
      this.setState({ ...this.state, qr: event.target.value });
    }
  };

  save = () => {
    alert("Saved Successfully!");
    this.setState({ ...this.state, active: null });
  };

  compareByDesc(key) {
    return function(a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }

  compareByAsc(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  componentDidMount() {
    this.getInitial();
  }

  getInitial = () => {
    let indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
    let currentTodos = this.state.products.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    this.setState({
      currentPage: Number(this.state.currentPage),
      indexOfLastTodo: indexOfLastTodo,
      indexOfFirstTodo: indexOfFirstTodo,
      products: currentTodos
    });
  };

  handleSort = id => {
    this.setState(prev => {
      return {
        [id]: !prev[id],
        products: prev.products.sort(
          (a, b) => (prev[id] ? a[id] < b[id] : a[id] > b[id])
        )
      };
    });
  };

  handlePageClick = (event, id) => {
    let indexOfLastTodo = id * this.state.todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
    let currentTodos = this.state.originalProducts.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    let isLast = true;
    let result = Number(id) * this.state.todosPerPage;
    if (this.state.totalLength > result) {
      isLast = false;
    } else {
      isLast = true;
    }

    this.setState({
      currentPage: Number(id),
      indexOfLastTodo: indexOfLastTodo,
      indexOfFirstTodo: indexOfFirstTodo,
      products: currentTodos,
      isLast: isLast
    });
  };

  nextHandler = event => {
    event.preventDefault();
    let indexOfLastTodo =
      (this.state.currentPage + 1) * this.state.todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
    let currentTodos = this.state.originalProducts.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    let isLast = true;
    let result = (this.state.currentPage + 1) * this.state.todosPerPage;
    if (this.state.totalLength > result) {
      isLast = false;
    } else {
      isLast = true;
    }

    this.setState({
      currentPage: Number(this.state.currentPage) + 1,
      indexOfLastTodo: indexOfLastTodo,
      indexOfFirstTodo: indexOfFirstTodo,
      products: currentTodos,
      isLast: isLast
    });
  };

  previousHandler = event => {
    event.preventDefault();
    let indexOfLastTodo =
      (this.state.currentPage - 1) * this.state.todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
    let currentTodos = this.state.originalProducts.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    this.setState({
      currentPage: Number(this.state.currentPage) - 1,
      indexOfLastTodo: indexOfLastTodo,
      indexOfFirstTodo: indexOfFirstTodo,
      products: currentTodos,
      isLast: false
    });
  };

  perPageHandler = event => {
    event.preventDefault();
    // console.log(event.target.value);
    let indexOfLastTodo = 1 * Number(event.target.value);
    let indexOfFirstTodo = indexOfLastTodo - Number(event.target.value);
    let currentTodos = this.state.originalProducts.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    this.setState({
      ...this.state,
      todosPerPage: Number(event.target.value),
      products: currentTodos
    });
  };

  search = event => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = products.filter(item => {
        return (
          item.id == event.target.value ||
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.price == Number(event.target.value) ||
          item.qa.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.qr.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.vendor.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      this.setState({
        ...this.state,
        searchString: event.target.value,
        products: filtered
      });
    } else {
      this.setState({
        ...this.state,
        products: this.state.originalProducts,
        searchString: "",
        idString: "",
        priceString: ""
      });
      setTimeout(() => {
        this.getInitial();
      }, 50);
    }
  };

  render() {
    const {
      idsort,
      namesort,
      pricesort,
      qasort,
      nameString,
      idString,
      priceString,
      totalLength,
      todosPerPage,
      currentPage,
      products,
      isLast,
      isFirst,
      searchString
    } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalLength / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={classnames("page-item", {
            active: number === currentPage
          })}
          key={number}
          id={number}
          onClick={event => this.handlePageClick(event, number)}
        >
          <a className="page-link" href="#">
            {number}
          </a>
        </li>
      );
    });

    return (
      <div className="container pt-4">
        <input
          type="search"
          value={searchString}
          onChange={this.search}
          className="form-control"
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.handleSort("id")}>
                Id
                {idsort ? (
                  <span className="icon-arrow-down" />
                ) : (
                  <span className="icon-arrow-up" />
                )}
              </th>
              <th scope="col" onClick={() => this.handleSort("name")} id="name">
                Name
                {namesort ? (
                  <span className="icon-arrow-down" />
                ) : (
                  <span className="icon-arrow-up" />
                )}
              </th>
              <th
                scope="col"
                onClick={() => this.handleSort("price")}
                id="price"
              >
                Price
                {pricesort ? (
                  <span className="icon-arrow-down" />
                ) : (
                  <span className="icon-arrow-up" />
                )}
              </th>
              <th scope="col" onClick={() => this.handleSort("qa")}>
                QA
                {qasort ? (
                  <span className="icon-arrow-down" />
                ) : (
                  <span className="icon-arrow-up" />
                )}
              </th>
              <th scope="col" onClick={() => this.handleSort("qr")}>
                QR
              </th>
              <th scope="col" onClick={() => this.handleSort("vendor")}>
                Vendor
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products ? (
            <tbody>
              {" "}
              {products.map(item => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>
                      {this.state.active === item.id ? (
                        <input
                          type="number"
                          value={this.state.price}
                          onChange={event => this.changed(event, "price")}
                        />
                      ) : (
                        <span>{item.price}</span>
                      )}
                    </td>
                    <td>
                      {this.state.active === item.id ? (
                        <input
                          type="number"
                          value={this.state.qa}
                          onChange={event => this.changed(event, "qa")}
                        />
                      ) : (
                        <span>{item.qa}</span>
                      )}
                    </td>
                    <td>
                      {this.state.active === item.id ? (
                        <input
                          type="number"
                          value={this.state.qr}
                          onChange={event => this.changed(event, "qr")}
                        />
                      ) : (
                        <span>{item.qr}</span>
                      )}
                    </td>
                    <td>{item.vendor}</td>
                    <td>
                      {this.state.active === item.id ? (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={this.save}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => this.editClicked(item)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}{" "}
            </tbody>
          ) : null}
        </table>

        <div className="row">
          <div className="col-md-3">
            <ul className="pagination">
              {currentPage !== 1 ? (
                <li className="page-item" onClick={this.previousHandler}>
                  <a className="page-link">Previous</a>
                </li>
              ) : null}
              {renderPageNumbers}
              {!isLast ? (
                <li className="page-item" onClick={this.nextHandler}>
                  <a className="page-link">Next</a>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="col-md-3">
            <select
              className="form-control"
              value={todosPerPage}
              onChange={this.perPageHandler}
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
