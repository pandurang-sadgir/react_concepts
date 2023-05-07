import img from '../../assets/a.jpg'
import './image.css';
const user = {
    'userName':'Jonny depp',
    'imageUrl':img,
    'imageSize':120
}
console.log(user);


export default function Profile(){
    return (
        <>
        <div id='userCard'>
        <h3>{user.userName}</h3>
        <img 
            className='userImage'
            src={user.imageUrl} 
            alt={`User Name:${user.userName}`} 
            title={`user image`}
            style={{
                width:user.imageSize,
                height:user.imageSize
                }}
         />
        </div>
        </>
    )

}