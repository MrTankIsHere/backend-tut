const musicModel = require('../models/music.model');
const albumModel = require("../models/album.model");

const { uploadFile } = require('../services/storage.service');
const jwt = require('jsonwebtoken');


async function createMusic(req, res) {

    // because, we have middleware we don't need this commented code, but i have kept it for reference.
    // const token = req.cookies.token;

    // if (!token) {
    //     return res.status(401).json({
    //         message: "Unauthorized",
    //     })
    // }
    
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //     if (decoded.role !== 'artist') {
    //         return res.status(403).json({
    //             message: "You don't have access to create music.",
    //         })
    //     }
    

        const { title } = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString('base64'));

        const music = await musicModel.create({
            uri: result.url,
            title,
            // artist: decoded.id,
            artist: req.user.id,
        })

        res.status(201).json({
            message: "Music uploaded successfull.",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            }
        })

    // because, we have middleware we don't need this commented code, but i have kept it for reference.
    // } catch (err) {

    // console.log(err);
    

    //     return res.status(401).json({
    //         message: "Unauthorized",
    //     })
    // }

}


async function createAlbum(req, res) {

    // because, we have middleware we don't need this commented code, but i have kept it for reference.
    // const token = req.cookies.token;

    // if ( !token ) {
    //     return res.status(401).json({
    //         message: "Unauthorised"
    //     })
    // }

    // try {
        
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //     if (decoded.role !== "artist"){
    //         return res.status(403).json({
    //             message: "You don't have access to create an album"
    //         })
    //     }

        const { title, musics } = req.body;

        const album = await albumModel.create({
            title,
            // artist: decoded.id,
            artist: req.user.id,
            musics: musics,
        })

        res.status(201).json({
            message: "album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.musics,
            }
        })

    // because, we have middleware we don't need this commented code, but i have kept it for reference.
    // } catch (err) {
        
    //     console.log(err);

    //     return res.status(401).json({
    //         message: "Unauthorised"
    //     })

    // }

}



async function getAllMusic(req, res) {

    // const musics = await musicModel.find().populate("artist");
    // const musics = await musicModel.find();
    // const musics = await musicModel.find().limit(1).populate("artist", "username email");
    const musics = await musicModel.find().skip(1).limit(2).populate("artist", "username email");
    
    res.status(200).json({
        message: "Music fetched successfully",
        music: musics
    })

}

async function getAllAlbums(req, res) {

    // const albums = await albumModel.find().populate("artist", "username email").populate("musics");
    const albums = await albumModel.find().select("title artist").populate("artist", "username email");

    res.status(200).json({
        message: "Albums fetched successfully.",
        albums: albums
    })

}

async function getAllAlbumsById(req, res) {

    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics");

    res.status(200).json({
        message: "album fetched successfully.",
        album: album
    })

}




module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbums, getAllAlbumsById }