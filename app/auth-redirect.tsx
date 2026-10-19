"use client";
import {useEffect} from "react";
import {createClient} from "@supabase/supabase-js";
export default function AuthRedirect(){
 useEffect(()=>{
  const hash=window.location.hash;
  const params=new URLSearchParams(hash.startsWith("#")?hash.slice(1):hash);
  const authReturn=params.has("access_token") && params.has("refresh_token");
  const authError=params.has("error");
  if(!authReturn&&!authError)return;
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!url||!key)return;
  const supabase=createClient(url,key,{auth:{detectSessionInUrl:false,persistSession:true,autoRefreshToken:true}});
  async function finish(){
   if(authError){window.history.replaceState(null,"",window.location.pathname);window.location.replace("/admin?auth_error=link");return}
   const access_token=params.get("access_token"),refresh_token=params.get("refresh_token");
   window.history.replaceState(null,"",window.location.pathname);
   if(!access_token||!refresh_token)return;
   const {error}=await supabase.auth.setSession({access_token,refresh_token});
   window.location.replace(error?"/admin?auth_error=login":"/admin");
  }
  void finish();
 },[]);
 return null;
}
