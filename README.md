#CRUD REST API 
A rest api made with nodejs and MongoDb database
<code>
Person = {
    firstName: string,
    lastName:string,
    age:number,
    yearOfBirth:Date,
    createdAt:Date,
}
</code>

Routes:
1./api/v1/create 
This url accepts a POST request with a Person data
2./api/v1 
This url accepts a GET request and display all users that were added

