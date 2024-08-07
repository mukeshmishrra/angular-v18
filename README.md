Angular 17 new update
-----------------------
01. standalone component by default enabled kr diya gaya hai.
hum jab v ab 
component 
pipe
directive generate krenge toh by default standalone enabled aayega 

standalone means kisi v component ko kisi v specific module me import krne ki jarurt n hai.


fir v module component create krna hai toh hum command use kr skte hai.
ng g c componentName --standalone=false 

02. SSR Support
------------------
 Existing project me ssr add krna hai to uske liye command hai - 
 ng add @angular/ssr 

 ssr ke fayede - 
 hamara project seo friendly ho jata hai
 performance v improve ho jati hai.


Server side rendering vs client side rendering 
---------------------------------
Client-Side Rendering (CSR)
Explanation:
Client-Side Rendering (CSR) ka matlab hai ki web page ka content client-side pe render hota hai, yani ki browser me. JavaScript frameworks jaise Angular, React, ya Vue.js use kiya jata hai. Jab user kisi web page ko request karta hai, server se sirf ek basic HTML file bheji jati hai aur baaki content JavaScript ke through dynamically load hota hai.

Example:
Request: User ne browser me URL dala aur server se page request kiya.
Response: Server ne ek basic HTML file bheji jisme JavaScript files include ki gayi.
Rendering: JavaScript ne browser me execute hokar baaki content load kiya aur display kiya.

<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <app-root></app-root>
  <script src="main.js"></script>
</body>
</html>

Real Use Case:
CSR ka ek common use case hai Single Page Applications (SPAs), jaise Gmail ya Facebook. In applications me, user ek hi page me interact karta hai aur content dynamically update hota rehta hai bina page reload kiye.


Server side rendering  (SSR)
----------------------
Explanation:
Server-Side Rendering (SSR) ka matlab hai ki web page ka content server-side pe render hota hai aur pre-rendered HTML client ko bheja jata hai. Server-side frameworks jaise Next.js (React ke sath), Angular Universal (Angular ke sath) use kiya jata hai. Is approach me, server pe hi HTML generate ho jata hai aur browser me directly render hota hai.

Example:
Request: User ne browser me URL dala aur server se page request kiya.
Response: Server ne HTML content pre-render karke bheja.
Rendering: Browser ne received HTML content ko directly display kiya.

<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <div id="app">
    <h1>Welcome to My App</h1>
    <p>This content is server-side rendered.</p>
  </div>
</body>
</html>

Real Use Case:
SSR ka ek common use case hai e-commerce websites jaise Amazon. In websites me, SEO (Search Engine Optimization) bahut important hota hai. SSR se search engines ko pre-rendered HTML milta hai jo SEO ke liye beneficial hota hai.

03. signal concept 

04. control flow 
@if(isLoggedIn) {
    <h1>Accessible</h1>
}
@else {
    <h1>Not Accessible</h1>
}

@for(user of users; track user.id){
    {{ user.name }}
}

if users array is [] empty 
use @empty{

}

=======================================
05. Deferrable view 

powerful tools to reduce the bundle size

on demand load krna ho kisi view ko tab hum is concept ko use kr skte hai 

@defer 

<div class="list">
    @for(item of products; track i; let i = $index) {
        @defer {
         // agar 10 data load hona hai one by one load hoga iske help se 
            <app-product [id]="i+1">
        } @placeholder {
          // load hone tak display krna hai tab. jaise 1 load hua to bakiyon ko kaise display krna hai 
            <div class="placeholder"></div>
        }
        @loading {
            // processbar display kr sakte hain
            <div class="loading-spinner">LOADING</div>
        } @error {
            // kuch error aa jata hai tab isme help se handle kr sakte hain

            <div class="error"> Internet got disconnected. </div>
        }
    }
</div>

--------------------------------
06. triggers , custom triggers 




Project file structure 
package.json --- json file , library use krne wale hai usko isme mention krte h


Basic Command to create Project in Angular
ng new project-name 
cd project-name 
ng serve -o 


Application jab start hota hai tab sabse pahle main.ts file load hota hai 


app.config.ts
--------------
provider configuration kar skte hai 

Component 
---------------------
Basic Build of angular application

how many files required in a component ?  ----> component.ts 

## how to create component? 
in the terminal - ng g component component-name 
                  ng g c component-name 

by default standalone component create hota hai 


Data binding 
---------------