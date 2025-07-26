# Multi-layer-security-wallet
//init form environment DFX
dfx new  <NameProject>
cd <NameProject>

--------------------------------------
 // run local 
dfx start --background   // local 
dfx deploy

------------------------------------------
Or 
// on chain 
dfx deploy --network ic    //on chain 

-------------------------------------------
//If there is a call to functions from the backend to candid for frontend used : 
cargo install candid-extractor
Or
cargo build --release --target wasm32-unknown-unknown --package <YourPathIn_backend>

//Then build a new one . 
dfx deploy

-------------------------------------------
//Identity Library Login
npm install @dfinity/auth-client @dfinity/agent
















