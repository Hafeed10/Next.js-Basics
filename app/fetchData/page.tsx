async function serveridFetch(){
 const res=  await fetch('https://jsonplaceholder.typicode.com/posts');
 if(!res.ok){
    throw new Error('Faild to lade')
 }
 return res.json();
}

type post = {
   userId:number;
   id:number;
   title:string;
   body:string;

}
async function FetchData() {
    const data = await serveridFetch();
    console.log(data);
  return (
   
    <div>Fetch Data
    {data.map((post:post )=> (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr />
      </div>
    ))}
  </div>
   
  )
}

export default FetchData
