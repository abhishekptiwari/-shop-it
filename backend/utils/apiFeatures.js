class APIFeatures {
    constructor(query , queryStr){
        this.query = query ;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
          name:{
              $regex:this.queryStr.keyword,
              $options:'i'
          }
        }:{}

        console.log(keyword);

        this.query = this.query.find({...keyword});
        return this ; 
    }

    filter(){
        const queryCopy = {...this.queryStr};

        console.log(queryCopy)

        // Removing fields from the query
        const removeFields = ['keyword', 'limit' , 'page'];

        removeFields.forEach(el => delete queryCopy[el]);// http://localhost:4000/api/v1/products?keyword=charmount&category=Electronics
        console.log(queryCopy);

        this.query = this.query.find(queryCopy);
        return this;
     
    }
}

module.exports = APIFeatures;