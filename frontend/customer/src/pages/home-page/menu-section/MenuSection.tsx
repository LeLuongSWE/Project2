import "./style.css"
import GetMenuItemsForHomePage from "./data"
import { useEffect, useState } from "react"
import { MenuItem } from "../../../interfaces/MenuItem"
import MenuButton from "../../../components/ui/button/MenuButton"

export default function MenuSection() {


    const imageNumber = 3
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    // const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentImages, setCurrentImages] = useState<number[]>(
        Array.from({ length: imageNumber }, (_, i) => i)
    )
    useEffect(() => {
        GetMenuItemsForHomePage().then(setMenuItems);
        setCurrentImages(Array.from({ length: imageNumber }, (_, i) => i))
        // console.log(menuItems)
    }, [])

    useEffect(() => {
        console.log("Current image indices:", currentImages)
    }, [currentImages])
    
    const nextSlide = () => {
        setCurrentImages(prev =>
            prev.map(idx => (idx + 1) % menuItems.length)
        )
    }

    const prevSlide = () => {
        setCurrentImages(prev =>
            prev.map(idx => (idx - 1 + menuItems.length) % menuItems.length)
        )
    }


    return (
        <section className="menu-section">
            <h1 className="menu-title">
                Thực đơn
            </h1>
            <p className="menu-description">
                Thực đơn của nhà hàng luôn đa dạng từ các món ăn truyền thống cho đến các món hiện đại
            </p>
            <ul className="menu-slider">
                <button className="prev-button" onClick={prevSlide}>{"<"}</button>
                <div className="slider-track">
                    {menuItems.length > 0 && currentImages.map((index) =>
                        <li className="menu-item" key={menuItems[index].foodId}>
                            <img
                                src={`data:image/jpeg;base64,${menuItems[index].foodImage}`}
                                alt={menuItems[index].name}
                                className="item-image"
                            />
                            <h3 className="item-name">{menuItems[index].name}</h3>
                        </li>
                    )}
                </div>

                <button className="next-button" onClick={nextSlide}>{">"}</button>
            </ul>
            <MenuButton/>
        </section>

    )
}