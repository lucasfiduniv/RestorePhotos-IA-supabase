import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { RedirectType, redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CreateAccountForm } from "@/components/auth/create-account";

export default async function Home() {
  let loggedIn = false;
  try {
  const supabase = createServerComponentClient({cookies})
  const { data: { session } } = await supabase.auth.getSession(); 

  if(session)loggedIn=true;

  } catch (error) {
    console.log("home",error);
  } finally {
    if(loggedIn) redirect("user-app", RedirectType.replace);
  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
    <Tabs defaultValue="create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl">
    <TabsList className="flex justify-around items-center  rounded-b-none h-14">
      <TabsTrigger className="transition-all delay-150" value="create-account">Account</TabsTrigger>
      <TabsTrigger className="transition-all delay-150" value="login">Login</TabsTrigger>
    </TabsList>
    <TabsContent value="create-account">
      <CreateAccountForm/>
    </TabsContent>
    <TabsContent value="login">

    </TabsContent>
  </Tabs>
  </div>
  )
}
