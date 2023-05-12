import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'

export default function AuthSupabase (){
  const session = useSession()
  const supabase = useSupabaseClient()

   

  return (
    <div className="container" style={{ padding: '50px 0 100px 0',width:'32%', margin:'auto' }}>
      {!session ? (
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
          theme="light"
          providers={['google','twitter']}
         />
      ) : (
        <div>
          <Account session={session}/>
        </div>
      )}
    </div>
  )
}
