<h1>CRUD REST API</h1> 
<p>A rest api made with nodejs and MongoDb database</p>
<p>Model Object</p>
<code>
Person = {
    firstName: string,
    lastName:string,
    age:number,
    yearOfBirth:Date,
    createdAt:Date,
}
</code>

<h3>Routes:</h3>
<ol>
    <code><li>/api/v1/create</li></code>
    <p>This url accepts a POST request with a Person data</p>
    <code><li>/api/v1/</li></code>
    <p>This url accepts a GET request and display all users that were added</p>
    <code><li>/api/v1/<Person_ID></li></code>
    <p>This url accepts a PATCH request and updates a user with certain that were modified</p>
    <code><li>/api/v1/delete/<Person_ID></li></code>
    <p>This url accepts a DELETE request and deletes a person in DB</p>
</ol>
