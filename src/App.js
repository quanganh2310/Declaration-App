import React, { Component } from 'react';
import DeclarationForm from "./DeclarationForm.js"
import orderBy from "lodash/orderBy";
import CardInfo from "./CardInfo.js"
import SearchBar from "./SearchBar.js"
import './App.css';

class App extends Component {
    
  constructor() {
    super();
    this.state = {
      data: [
        {
          firstname: "Trần Văn",
          lastname: "Hoàng",
          student_id: "20166152",
          sex: "Nam",
          term: "K61",
          class: "CNTT Việt Nhật - IS - K61",
          address: "Nghệ An",
          phone_number: "0123456789",
          email: "hoangbeo@gmail.com",
          question1: {
            a1: false,
            a2: true,
          },
          question2: {
            a1: true,
            a2: false,
          },
          question3: {
            a1: true,
            a2: false,
          },
          question4: {
            a1: true,
            a2: false,
            a3: false,
          },
        },
        // {
        //   firstname: "Đỗ Thúy",
        //   lastname: "Nga",
        //   student_id: "20164631",
        //   sex: "female",
        //   term: "K61",
        //   class: "CNTT Việt Nhật - AS - K61",
        //   address: "Hà Nội",
        //   phone_number: "034345656",
        //   email: "dothuynga@gmail.com",
        //   question1: true,
        //   question2: true,
        //   question3: true,
        //   question4: {
        //     a1: true,
        //     a2: false,
        //     a3: false,
        //   },
        // },
        // {
        //   firstname: "Nguyễn Hữu",
        //   lastname: "Mạnh",
        //   student_id: "20163845",
        //   sex: "male",
        //   term: "K61",
        //   class: "CNTT Việt Nhật - AS - K61",
        //   address: "Hà Nội",
        //   phone_number: "034576245",
        //   email: "manhnguyen@gmail.com",
        //   question1: true,
        //   question2: true,
        //   question3: true,
        //   question4: {
        //     a1: true,
        //     a2: false,
        //     a3: false,
        //   },
        // },
        // {
        //   firstname: "Lê Thanh",
        //   lastname: "Nam",
        //   student_id: "20162157",
        //   sex: "male",
        //   term: "K61",
        //   class: "CNTT Việt Nhật - IS - K61",
        //   address: "Nghe An",
        //   phone_number: "0123456789",
        //   email: "lenam@gmail.com",
        //   question1: true,
        //   question2: true,
        //   question3: true,
        //   question4: {
        //     a1: true,
        //     a2: false,
        //     a3: false,
        //   },
        // },
      ],
      query: "",
      columnToQuery: "lastname"
    }   
  } 


  handleTitleEdit(e) {
    this.state.item.title = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleDesEdit(e) {
    this.state.item.description = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleAddItem(data) {
    if (data.firstname.trim() === "") return
    this.setState({data: [...this.state.data,data]}, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data))
    });
    
  }
  
  handleDeleteItem(index) {
    this.state.data.splice(index, 1);
    this.setState({data: this.state.data});
  }

  handleSearchQuery(query) {
    this.setState({query: query});
  }
  
  handleSearchColumn(columnToQuery) {
    this.setState({columnToQuery: columnToQuery});
  }

    
  render() {
    const lowerCaseQuery = this.state.query.toLowerCase();

    let data = orderBy(this.state.query? this.state.data.filter(x => String(x[this.state.columnToQuery]).toLowerCase().includes(lowerCaseQuery)): this.state.data);

    let list = data.map((item,index) => {
        return (
            <CardInfo
                key = {index}
                firstname = {item.firstname}
                lastname = {item.lastname}
                student_id = {item.student_id}
                sex = {item.sex}
                term = {item.term}
                class_name = {item.class}
                address = {item.address}
                phone_number = {item.phone_number}
                email = {item.email}
                question1 = {item.question1}
                question2 = {item.question2}
                question3 = {item.question3}
                question4 = {item.question4}
                handleDelete = {(index)=>this.handleDeleteItem(index)}
            />
        )
    });

   
      
    return (
      
      <div>
        <div class="container">

        <div className="row mt-20">
            <div className="card">
              <ul className="tabs">
                <li className="tab col s6">
                  <a className="black-text active" href="#form" ><h6>Mẫu khai báo</h6></a>
                </li>
                <li className="tab col s6">
                  <a href="#list" className="black-text">
                    <h6>Danh sách</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div id="form" className="col s12">
              <div class="row">
                <div class="col s1"></div>
                <div class="col s10">
                  <DeclarationForm addItem={(data)=>this.handleAddItem(data)}></DeclarationForm>
                </div>
               <div class="col s1"></div>
              </div>
            </div>
            <div id="list" className="col s12">
            <div class="row">
                <div class="col s1"></div>
                <div class="col s10">
                  <SearchBar
                    query={this.state.query}
                    columnToQuery={this.state.columnToQuery}
                    handleSearchQuery={(query)=>this.handleSearchQuery(query)}
                    handleSearchColumn={(value)=>this.handleSearchColumn(value)}
                  ></SearchBar>
                  {list}
                </div>
                <div class="col s1"></div>
              </div>
            </div>
          </div>
          </div>
          </div>
    );
  }
}

export default App;