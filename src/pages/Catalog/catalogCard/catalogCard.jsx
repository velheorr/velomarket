import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "../Catalog.module.css";
import Card from "@mui/material/Card";
import noimg from '../img/noimg.png'
import * as axios from "axios";


let ddd = noimg
const getImg = async ()=>{
    /*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FAhRV9Bv4rrXBvA')*/
    /*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FbC0wjFlOWByTMA')
    * https://disk.yandex.ru/i/bs3CT68dYWvZEg
    * */
    let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')
    console.log(response)

    let mainPath = `9qxg82YY4PIMEQ`
    let src =  `samokat`
    console.log(decodeURIComponent(mainPath))

    //let encode = encodeURIComponent(`${mainPath}${src}`)
    //console.log(encode)
    //let im = await axios.get(`https://disk.yandex.ru/i/9qxg82YY4PIMEQ`)
    //console.log(im)
    //https://disk.yandex.ru/i/9qxg82YY4PIMEQ
    //https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ
   /* let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')
    console.log(response)*/
    //let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')
    //console.log(response.data.preview)
    //ddd = response.data.preview

    /*let response2 =  await axios.get('https://disk.yandex.ru/d/AhRV9Bv4rrXBvA/Data/file_.json')
    console.log(response2)*/
    let path = encodeURIComponent('https://disk.yandex.ru/d/AhRV9Bv4rrXBvA')
    let folderPublicKey = "https%3A%2F%2Fyadi.sk%2Fd%2FPB0WCovt4v-Tkg"
    let endPoint = "https://cloud-api.yandex.net/v1/disk/public/resources"

    const listFolder = (path) => {
        axios.get(endPoint + '/?public_key=' + folderPublicKey + "&path=" + path)
            .then((response) => {
                response.data._embedded.items.forEach(el => {
                    // process file or folder
                    console.log(el)
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let folder = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FAhRV9Bv4rrXBvA')
        .then((res) => {
            let ddd = res.data._embedded.items[1].preview
        });
    console.log(folder)
    /*folder.data._embedded.items.forEach(i =>{
        console.log(i.name)
    })*/

}
getImg()

/*    let path = 'https://disk.yandex.ru/d/bC0wjFlOWByTMA'
    let publicKey = 'AQAEA7qjXJf7AAeNFyuetwINFUaCrpJGhLpr4zk'
    let endPoint = "https://cloud-api.yandex.net/v1/disk/public/resources"
    const listFolder = (path)=> {
    axios.get(endPoint + '/?public_key=' + publicKey + "&path=" + path)
        .then((response) => {
            response.data._embedded.items.forEach(el => {
                // process file or folder
                console.log(el)
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    listFolder(path)*/



const CatalogCard = ({items}) => {
    const {Номенклатура, НоменклатураБренд, НоменклатураМодель, НоменклатураКод, НоменклатураАртикул, Цена} = items;
/*    const src = '/img/catalog'
    let x;


    if (`${src}/${НоменклатураКод}.png`  ){
        console.log(`${src}/${НоменклатураКод}.png`)
        x = `${src}/${НоменклатураКод}.png`
    }*/


    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image ={ddd}
                    //image={x ? x : noimg}
                    /*image="https://bikemania.com.ua/wa-data/public/shop/products/10/37/493710/images/166471/166471.440.jpg"*/
                    alt={Номенклатура}
                />
                <CardContent>
                    <Typography gutterBottom component="div" fontSize={16} fontWeight={600} height={72}>
                        {Номенклатура}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <div>Артикул: {НоменклатураАртикул}</div>
                        <div>Код: {НоменклатураКод}</div>
                    </Typography>
                    <Typography variant="body2" color="text.primary" component="div">
                        <div>Бренд: {НоменклатураБренд}</div>
                        <div>Модель: {НоменклатураМодель}</div>


                        {/*<div><CheckBoxIcon size="small" color='success'/></div>*/}
                        <div className={s.price}>Цена: {Цена}р.</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CatalogCard;