/*function App(){
    return (<h1>Hola mundo</h1>);
}
export const hello = 123;

export default App;*/

const getResult = () => {
    return 100+100;
}

export const HelloWorldApp = () =>{
    return(
        <>
                <h1>Hello World App</h1>
                <p>{getResult()}</p>
        </>
    );
}