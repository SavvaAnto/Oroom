import React from 'react';
import classes from './Content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.room}>
                <img src='https://www.gamercamp.ca/wp-content/uploads/2019/03/5-ways-to-pimp-out-your-living-room-for-ultimate-gaming.jpg'></img>
            </div>
            <div className={classes.owner}>
                <img src='https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP2402-CUSA05624_00-AV00000000000107/1576760032000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'></img>
            </div>
            <div>
                My posts
            <div>
                New post
            </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;