// Immediately Invoked Function Expressions (IIFE)
//jada kuch nhi bas yeh man lo ki m chata hu mera function ek dum tabhi turant execute ho jaye

(function dekho(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 
//NOTE=> agar mene yeh ; nhi lagaya to bhai mera code error dega vo sochega ki yeh dusra niche vala bhi uper vale ka part h isliye jab bhi ase do iife likhna ho to ; jarur lagaye 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("jayant")