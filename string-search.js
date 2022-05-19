const products=[
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camre flashlight Phone',
    'yellow laptop with black camera',
    '1x59 lenovo yeoga commercial laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purpole color phone with Laptop'
];

const searching = 'PHONE';
// indexOf

const output=[];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) !=-1){
        // output.push(product);
    }
}
// console.log(output);

// includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}

console.log(output);