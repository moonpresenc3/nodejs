import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

if (props.users.length === 0){
    props.setUsers([
        {id: 1,
            photoUrl: 'https://i.pinimg.com/originals/91/80/b1/9180b12aa8ee6da2bf79a49554ed9309.jpg',
            followed: false,
            fullName: "Ivan",
            status: 'I am a boss',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://i.pinimg.com/originals/91/80/b1/9180b12aa8ee6da2bf79a49554ed9309.jpg',
            followed: true,
            fullName: "Stas",
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukrain'}
        },
        {
            id: 3,
            photoUrl: 'https://i.pinimg.com/originals/91/80/b1/9180b12aa8ee6da2bf79a49554ed9309.jpg',
            followed: false,
            fullName: "Dmitry",
            status: 'I am a boss too too',
            location: {city: 'Minsk', country: 'Belarus'}

        }
        ]
        )
}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>npm
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)    }   }>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)  }   }> Follow </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;
