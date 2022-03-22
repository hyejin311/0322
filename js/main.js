console.log('welcome');



// 비동기 함수

async function test(){
    const prom = Promise.resolve(123);
    console.log(await prom);
}
test();