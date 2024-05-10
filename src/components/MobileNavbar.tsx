import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import gsap from "gsap";

enum NavbarItems {
    HOME,
    CATEGORY,
    ORDERS,
    PROFILE
}

function MobileNavbar() {
    const navbarItems = [
        {
            name: "Home",
            icon: <HomeIcon />,
            type: NavbarItems.HOME
        },
        {
            name: "Category",
            icon: <CategoryIcon />,
            type: NavbarItems.CATEGORY
        },
        {
            name: "Orders",
            icon: <LocalMallIcon />,
            type: NavbarItems.ORDERS
        },
        {
            name: "Profile",
            icon: <PersonIcon />,
            type: NavbarItems.PROFILE
        },
    ]

    const [currentItem, setCurrentItem] = useState(NavbarItems.HOME)

    useEffect(() => {
        if(currentItem != NavbarItems.HOME){
            gsap.to("body", {
                overflow: "hidden"
            })
        }else{
            gsap.to("body", {
                overflow: "auto"
            })
        }
    }, [currentItem])

    return (
        <>
            {
                (currentItem != NavbarItems.HOME) ?
                <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-white z-50 pb-32">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam explicabo porro placeat iste maxime reprehenderit laboriosam esse obcaecati illum distinctio impedit labore, natus autem cum nostrum amet sed, doloribus accusamus doloremque fuga. Numquam vero impedit dolores enim sunt asperiores aperiam facilis expedita adipisci unde non sit odio voluptas ducimus consequatur a, saepe excepturi odit praesentium obcaecati commodi atque dicta omnis. Aliquam velit obcaecati, sed facere tempora quis eius ad, consectetur deserunt consequuntur amet est doloremque a necessitatibus iusto eaque voluptatum odit minus fuga maxime distinctio qui, voluptates dolorum? Obcaecati, mollitia libero accusantium quas id laborum quia facilis vel odio deleniti quam nulla, quaerat ratione cumque autem. Laudantium maxime eveniet cum, sed minima nam atque ratione adipisci animi omnis reprehenderit qui quo saepe quasi et molestiae officiis tempore reiciendis. Facilis consequuntur quia repudiandae culpa nostrum officia debitis ad dolore? Eaque ad est, architecto blanditiis voluptatem maxime cumque impedit facilis! Magni quis iure libero iste nobis in, aut autem. Animi tenetur iusto laudantium autem qui! Mollitia recusandae, nesciunt delectus dolores earum soluta itaque deleniti magnam optio labore laudantium quis assumenda voluptas sunt alias veniam ab esse? Quae dolore dicta delectus recusandae, natus dignissimos minus? Laudantium adipisci nisi pariatur repellat commodi, voluptatem, quis sint in nulla totam distinctio molestiae facere dolor voluptatibus dolore officiis, ipsa harum! Unde maiores, voluptatum asperiores fugiat blanditiis dolores quo rerum a, qui praesentium nemo nihil dignissimos vero nulla omnis doloribus illo perferendis neque? Quas inventore ratione aut mollitia sapiente quod qui in, vero beatae dolore laudantium praesentium architecto voluptatem nesciunt tempore ab numquam? Nesciunt corrupti accusantium debitis, eos ad at eaque provident, dignissimos fuga quas, repellendus exercitationem! Dolorem sed assumenda aliquam. Consectetur ullam ipsa quibusdam possimus eum neque exercitationem, omnis praesentium repudiandae fuga perferendis asperiores dolore! Laborum quae neque culpa voluptatum optio repudiandae, eveniet provident quasi magni, tempore assumenda et. Expedita assumenda earum omnis quod tenetur pariatur nesciunt sunt reprehenderit adipisci fugiat porro facilis consectetur reiciendis laboriosam explicabo molestiae, natus distinctio quia! Fugiat, dolorum. Doloribus iure enim nisi tenetur explicabo, veritatis sed quasi illum dolores rerum cum velit eligendi consequatur unde odio cupiditate harum, corrupti quibusdam dignissimos quam suscipit voluptatem error. Sunt assumenda nostrum culpa placeat dicta minus rem. Harum ut delectus itaque repellat pariatur consequatur, fugiat tenetur minus! Sint veritatis laudantium fugit blanditiis, quo rem doloremque est aut distinctio magnam iure minima consequatur officiis illum nemo ea. Obcaecati dolores, molestiae pariatur quia omnis esse rerum dolorum sequi, commodi qui laborum ratione fugit rem necessitatibus itaque. Repudiandae odio omnis doloribus dicta dignissimos sit numquam quas, suscipit, veritatis perspiciatis aperiam repellendus. Obcaecati nulla, voluptatem rem exercitationem minima, aut laudantium quam dolorum repudiandae nesciunt molestias sed, magnam reprehenderit deserunt facilis! Doloremque officia eaque quidem commodi eius explicabo quas illo, laboriosam sed quis quam maxime ab consequatur in inventore blanditiis ad iure vel culpa porro ullam voluptatibus, necessitatibus saepe debitis. Voluptatem corrupti laboriosam laudantium, deserunt labore alias saepe minima error dolorem exercitationem? Error atque, illo aut officiis nisi nobis, quos adipisci delectus, repellat inventore maxime architecto velit commodi natus quisquam.
                </div> :
                <></>
            }
            <div className="xl:hidden w-full fixed bottom-0 left-0 rounded-ss-2xl rounded-se-2xl overflow-hidden z-50">
                {/* <div className="bg-white">
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                </div> */}
                <div className="bg-primary p-4">
                    <div className="flex items-center justify-between">
                        {navbarItems.map((item, index) => (
                            <button
                                className={`${(currentItem == item.type) ? 'text-secondary-yellow' : 'text-gray-400'}`}
                                onClick={() => setCurrentItem(item.type)}
                            >
                                {item.icon}
                                <span className="mt-1 block text-sm">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
