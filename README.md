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
    <li>/api/v1/create</li>
    <p>This url accepts a POST request with a Person data</p>
    <img src="https://user-images.githubusercontent.com/89256215/143364486-61cc7654-6554-480f-9e17-f96ac53be207.png"/>
    <li>/api/v1/</li>
    <p>This url accepts a GET request and display all users that were added</p>
    <img src="https://user-images.githubusercontent.com/89256215/143364705-17f1f076-4b1c-43c3-ba29-8d6edf537195.png"/>
    <li>/api/v1/<Person_ID></li>
    <p>This url accepts a PATCH request and updates a user with certain that were modified</p>
    <img src="https://user-images.githubusercontent.com/89256215/143364773-547861e1-18d6-4b9c-854c-5237d43ce1cb.png"/
    <li>/api/v1/delete/<Person_ID></li>
    <p>This url accepts a DELETE request and deletes a person in DB</p>
    <img src="https://user-images.githubusercontent.com/89256215/143364826-44fb5092-caea-4906-b887-e2e14c466e24.png" />
   

</ol>
