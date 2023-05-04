export const UserData =({users})=>{
  return
  (
    <>
    {
        users.map((curUser) =>{
            const {from ,to, price} = curUser;

            return(
                <tr key={from}>
                    <td>{from}</td>
                    <td>{to}</td>
                    <td>{price}</td>
                </tr>
            )
         
        })
    }
    </>
  )
}
