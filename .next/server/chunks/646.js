"use strict";exports.id=646,exports.ids=[646],exports.modules={94435:(e,a,t)=>{t.d(a,{DeleteConfirmation:()=>o});var r=t(10326),s=t(17577),i=t(35047),n=t(46226),d=t(99440),l=t(31862);let o=({eventId:e})=>{let a=(0,i.usePathname)(),[t,o]=(0,s.useTransition)();return(0,r.jsxs)(d.aR,{children:[r.jsx(d.vW,{children:r.jsx(n.default,{src:"/assets/icons/delete.svg",alt:"edit",width:20,height:20})}),(0,r.jsxs)(d._T,{className:"bg-white",children:[(0,r.jsxs)(d.fY,{children:[r.jsx(d.f$,{children:"Are you sure you want to delete?"}),r.jsx(d.yT,{className:"p-regular-16 text-grey-600",children:"This will permanently delete this event"})]}),(0,r.jsxs)(d.xo,{children:[r.jsx(d.le,{children:"Cancel"}),r.jsx(d.OL,{onClick:()=>o(async()=>{await (0,l.Bt)({eventId:e,path:a})}),children:t?"Deleting...":"Delete"})]})]})]})}},48269:(e,a,t)=>{t.d(a,{default:()=>d});var r=t(10326),s=t(35047);t(17577);var i=t(90772),n=t(77863);let d=({page:e,totalPages:a,urlParamName:t})=>{let d=(0,s.useRouter)(),l=(0,s.useSearchParams)(),o=a=>{let r="next"===a?Number(e)+1:Number(e)-1,s=(0,n.Yz)({params:l.toString(),key:t||"page",value:r.toString()});d.push(s,{scroll:!1})};return(0,r.jsxs)("div",{className:"flex gap-2",children:[r.jsx(i.z,{size:"lg",variant:"outline",className:"w-28",onClick:()=>o("prev"),disabled:1>=Number(e),children:"Previous"}),r.jsx(i.z,{size:"lg",variant:"outline",className:"w-28",onClick:()=>o("next"),disabled:Number(e)>=a,children:"Next"})]})}},99440:(e,a,t)=>{t.d(a,{OL:()=>y,_T:()=>f,aR:()=>l,f$:()=>g,fY:()=>u,le:()=>h,vW:()=>o,xo:()=>p,yT:()=>x});var r=t(10326),s=t(17577),i=t(80440),n=t(77863),d=t(90772);let l=i.fC,o=i.xz,c=i.h_,m=s.forwardRef(({className:e,...a},t)=>r.jsx(i.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));m.displayName=i.aV.displayName;let f=s.forwardRef(({className:e,...a},t)=>(0,r.jsxs)(c,{children:[r.jsx(m,{}),r.jsx(i.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));f.displayName=i.VY.displayName;let u=({className:e,...a})=>r.jsx("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...a});u.displayName="AlertDialogHeader";let p=({className:e,...a})=>r.jsx("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});p.displayName="AlertDialogFooter";let g=s.forwardRef(({className:e,...a},t)=>r.jsx(i.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold",e),...a}));g.displayName=i.Dx.displayName;let x=s.forwardRef(({className:e,...a},t)=>r.jsx(i.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...a}));x.displayName=i.dk.displayName;let y=s.forwardRef(({className:e,...a},t)=>r.jsx(i.aU,{ref:t,className:(0,n.cn)((0,d.d)(),e),...a}));y.displayName=i.aU.displayName;let h=s.forwardRef(({className:e,...a},t)=>r.jsx(i.$j,{ref:t,className:(0,n.cn)((0,d.d)({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));h.displayName=i.$j.displayName},90772:(e,a,t)=>{t.d(a,{d:()=>l,z:()=>o});var r=t(10326),s=t(17577),i=t(34214),n=t(79360),d=t(77863);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef(({className:e,variant:a,size:t,asChild:s=!1,...n},o)=>{let c=s?i.g7:"button";return r.jsx(c,{className:(0,d.cn)(l({variant:a,size:t,className:e})),ref:o,...n})});o.displayName="Button"},31862:(e,a,t)=>{t.d(a,{Bt:()=>n,eJ:()=>i,yM:()=>s}),t(15424);var r=t(46242);(0,r.$)("bd56847814b8582ed592e5a0ad29c2a558330844");var s=(0,r.$)("d5405ec4581fbf83e50fec872e164528047847be");(0,r.$)("67789ba99783750b55670f4c41d8a10a49acfb5b");var i=(0,r.$)("a5f50866aa33f214f2d11b7ca5a6607567b9f578"),n=(0,r.$)("41be45b2bcfdcc42ad338a85e4d4d97e85e8e3a2");(0,r.$)("3fcc73940eb836c0a8fa357a2a60502a69f1c3bc"),(0,r.$)("fe19a021a78ed8d2e37a9c2e6c15511a4d46022e")},37888:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(19510);t(71159);var s=t(50650),i=t(12650),n=t(17710),d=t(57371),l=t(68570);let o=(0,l.createProxy)(String.raw`C:\Users\kisho\OneDrive\Desktop\evently\event_platform-main\components\shared\DeleteConfirmation.tsx`),{__esModule:c,$$typeof:m}=o;o.default;let f=(0,l.createProxy)(String.raw`C:\Users\kisho\OneDrive\Desktop\evently\event_platform-main\components\shared\DeleteConfirmation.tsx#DeleteConfirmation`),u=({event:e,hasOrderLink:a,hidePrice:t})=>{let{sessionClaims:l}=(0,i.I8)(),o=l?.userId===e.organizer._id.toString();return(0,r.jsxs)("div",{className:"group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]",children:[r.jsx(d.default,{href:`/events/${e._id}`,style:{backgroundImage:`url(${e.imageUrl})`},className:"flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"}),o&&!t&&(0,r.jsxs)("div",{className:"absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all",children:[r.jsx(d.default,{href:`/events/${e._id}/update`,children:r.jsx(n.default,{src:"/assets/icons/edit.svg",alt:"edit",width:20,height:20})}),r.jsx(f,{eventId:e._id})]}),(0,r.jsxs)("div",{className:"flex min-h-[230px] flex-col gap-3 p-5 md:gap-4",children:[!t&&(0,r.jsxs)("div",{className:"flex gap-2",children:[r.jsx("span",{className:"p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60",children:e.isFree?"FREE":`$${e.price}`}),r.jsx("p",{className:"p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1",children:e.category.name})]}),r.jsx("p",{className:"p-medium-16 p-medium-18 text-grey-500",children:(0,s.o0)(e.startDateTime).dateTime}),r.jsx(d.default,{href:`/events/${e._id}`,children:r.jsx("p",{className:"p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black",children:e.title})}),(0,r.jsxs)("div",{className:"flex-between w-full",children:[(0,r.jsxs)("p",{className:"p-medium-14 md:p-medium-16 text-grey-600",children:[e.organizer.firstName," ",e.organizer.lastName]}),a&&(0,r.jsxs)(d.default,{href:`/orders?eventId=${e._id}`,className:"flex gap-2",children:[r.jsx("p",{className:"text-primary-500",children:"Order Details"}),r.jsx(n.default,{src:"/assets/icons/arrow.svg",alt:"search",width:10,height:10})]})]})]})]})},p=(0,l.createProxy)(String.raw`C:\Users\kisho\OneDrive\Desktop\evently\event_platform-main\components\shared\Pagination.tsx`),{__esModule:g,$$typeof:x}=p;p.default;let y=(0,l.createProxy)(String.raw`C:\Users\kisho\OneDrive\Desktop\evently\event_platform-main\components\shared\Pagination.tsx#default`),h=({data:e,emptyTitle:a,emptyStateSubtext:t,page:s,totalPages:i=0,collectionType:n,urlParamName:d})=>r.jsx(r.Fragment,{children:e.length>0?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[r.jsx("ul",{className:"grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10",children:e.map(e=>r.jsx("li",{className:"flex justify-center",children:r.jsx(u,{event:e,hasOrderLink:"Events_Organized"===n,hidePrice:"My_Tickets"===n})},e._id))}),i>1&&r.jsx(y,{urlParamName:d,page:s,totalPages:i})]}):(0,r.jsxs)("div",{className:"flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center",children:[r.jsx("h3",{className:"p-bold-20 md:h5-bold",children:a}),r.jsx("p",{className:"p-regular-14",children:t})]})})},8024:(e,a,t)=>{t.r(a),t.d(a,{createEvent:()=>g,deleteEvent:()=>h,getAllEvents:()=>v,getEventById:()=>x,getEventsByUser:()=>b,getRelatedEventsByCategory:()=>N,updateEvent:()=>y});var r=t(24330);t(60166);var s=t(57708),i=t(49918),n=t(19074),d=t(29258),l=t(11185);let o=new l.Schema({name:{type:String,required:!0,unique:!0}}),c=l.models.Category||(0,l.model)("Category",o);var m=t(50650),f=t(40618);let u=async e=>c.findOne({name:{$regex:e,$options:"i"}}),p=e=>e.populate({path:"organizer",model:d.Z,select:"_id firstName lastName"}).populate({path:"category",model:c,select:"_id name"});async function g({userId:e,event:a,path:t}){try{if(await (0,i.v)(),!await d.Z.findById(e))throw Error("Organizer not found");let r=await n.Z.create({...a,category:a.categoryId,organizer:e});return(0,s.revalidatePath)(t),JSON.parse(JSON.stringify(r))}catch(e){(0,m.S3)(e)}}async function x(e){try{await (0,i.v)();let a=await p(n.Z.findById(e));if(!a)throw Error("Event not found");return JSON.parse(JSON.stringify(a))}catch(e){(0,m.S3)(e)}}async function y({userId:e,event:a,path:t}){try{await (0,i.v)();let r=await n.Z.findById(a._id);if(!r||r.organizer.toHexString()!==e)throw Error("Unauthorized or event not found");let d=await n.Z.findByIdAndUpdate(a._id,{...a,category:a.categoryId},{new:!0});return(0,s.revalidatePath)(t),JSON.parse(JSON.stringify(d))}catch(e){(0,m.S3)(e)}}async function h({eventId:e,path:a}){try{await (0,i.v)(),await n.Z.findByIdAndDelete(e)&&(0,s.revalidatePath)(a)}catch(e){(0,m.S3)(e)}}async function v({query:e,limit:a=6,page:t,category:r}){try{await (0,i.v)();let s=r?await u(r):null,d={$and:[e?{title:{$regex:e,$options:"i"}}:{},s?{category:s._id}:{}]},l=(Number(t)-1)*a,o=n.Z.find(d).sort({createdAt:"desc"}).skip(l).limit(a),c=await p(o),m=await n.Z.countDocuments(d);return{data:JSON.parse(JSON.stringify(c)),totalPages:Math.ceil(m/a)}}catch(e){(0,m.S3)(e)}}async function b({userId:e,limit:a=6,page:t}){try{await (0,i.v)();let r={organizer:e},s=n.Z.find(r).sort({createdAt:"desc"}).skip((t-1)*a).limit(a),d=await p(s),l=await n.Z.countDocuments(r);return{data:JSON.parse(JSON.stringify(d)),totalPages:Math.ceil(l/a)}}catch(e){(0,m.S3)(e)}}async function N({categoryId:e,eventId:a,limit:t=3,page:r=1}){try{await (0,i.v)();let s=(Number(r)-1)*t,d={$and:[{category:e},{_id:{$ne:a}}]},l=n.Z.find(d).sort({createdAt:"desc"}).skip(s).limit(t),o=await p(l),c=await n.Z.countDocuments(d);return{data:JSON.parse(JSON.stringify(o)),totalPages:Math.ceil(c/t)}}catch(e){(0,m.S3)(e)}}(0,f.h)([g,x,y,h,v,b,N]),(0,r.j)("d5405ec4581fbf83e50fec872e164528047847be",g),(0,r.j)("67789ba99783750b55670f4c41d8a10a49acfb5b",x),(0,r.j)("a5f50866aa33f214f2d11b7ca5a6607567b9f578",y),(0,r.j)("41be45b2bcfdcc42ad338a85e4d4d97e85e8e3a2",h),(0,r.j)("3fcc73940eb836c0a8fa357a2a60502a69f1c3bc",v),(0,r.j)("fe19a021a78ed8d2e37a9c2e6c15511a4d46022e",b),(0,r.j)("bd56847814b8582ed592e5a0ad29c2a558330844",N)},49918:(e,a,t)=>{t.d(a,{v:()=>d});var r=t(11185),s=t.n(r);let i=process.env.MONGODB_URI,n=global.mongoose||{conn:null,promise:null},d=async()=>{if(n.conn)return n.conn;if(!i)throw Error("MONGODB_URI is missing");return n.promise=n.promise||s().connect(i,{dbName:"evently1",bufferCommands:!1}),n.conn=await n.promise,n.conn}},19074:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(11185);let s=new r.Schema({title:{type:String,required:!0},description:{type:String},location:{type:String},createdAt:{type:Date,default:Date.now},imageUrl:{type:String,required:!0},startDateTime:{type:Date,default:Date.now},endDateTime:{type:Date,default:Date.now},price:{type:String},isFree:{type:Boolean,default:!1},url:{type:String},category:{type:r.Schema.Types.ObjectId,ref:"Category"},organizer:{type:r.Schema.Types.ObjectId,ref:"User"}}),i=r.models.Event||(0,r.model)("Event",s)},29258:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(11185);let s=new r.Schema({_id:{type:String},clerkId:{type:String,required:!0,unique:!0},email:{type:String,required:!0,unique:!0},username:{type:String,required:!0,unique:!0},firstName:{type:String,required:!0},lastName:{type:String,required:!0},photo:{type:String,required:!0}}),i=r.models.User||(0,r.model)("User",s)}};