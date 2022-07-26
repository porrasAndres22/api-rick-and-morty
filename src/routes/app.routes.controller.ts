import {RequestHandler} from 'express'
import User from './login'
import List from './episodeslist'
import bcrypt from 'bcrypt'

export const createUser: RequestHandler = async(req,res) => {

    try {
        const userFound = await User.findOne({name: req.body.name});

        if (userFound === null){
            const body = req.body;
            const pass = body.pass;
            const hash = await bcrypt.hash(pass, 10);
            body.pass = hash;
            const user = new User(body);
            await user.save();
            res.json(body.name);
        }else if(userFound !== null){
            return res.status(301).json({message: `User Exist`});
        }

    } catch (error) {
        res.json(error);
    }
} 

export const getUser: RequestHandler = async(req,res) => {
    try {
        const userFound = await User.findOne({name: req.body.name});
        if(userFound !== null){
            const compareHash = await bcrypt.compare(req.body.pass, userFound.pass);
            if(compareHash === true){
                res.json({hash: "true"});
            }else{
                res.json({hash: "false"});
            }
        }else{
            res.json({hash: "false"});
        }
    } catch (error) {
        res.json(error);
        
    }
} 

export const getUsers: RequestHandler = async(req,res) => {
    try {
        const user = await User.find();
        return res.json({message: "Connect"});
    } catch (error) {
        
    }
} 

export const deleteUsers: RequestHandler = async(req,res) => {
    // try {
    //     const userFound = await User.findByIdAndDelete(req.params.id);
    //     if (!userFound) return res.status(301).json({message: `the user thats exist`});
    //     return res.json(userFound);
    // } catch (error) {
    //     res.json(error);
        
    // }
}

///////////// LIst /////////////////////////

export const getListEpisode: RequestHandler = async(req,res) => {
    try {
        const listepisodes = await List.find();
        return res.json(listepisodes);
    } catch (error) {
        
    }
} 

export const createListEpisode: RequestHandler = async(req,res) => {

    try {
        const listFound = await List.findOne({name: req.body.name});
        if(listFound === null){
            const list = new List(req.body);
            await list.save();
            return res.json(req.body);
        }else if(listFound !== null){
            return res.json({mensaje: `List Exist`});
        }
    } catch (error) {
        res.json(error);
    }
} 

export const insertListEpisode: RequestHandler = async(req,res) => {

    try {
        const lista = await List.findOne({name: req.body.name});

        if(lista !== null){
            let episodes = lista.episodes;
            let partialSendEpisode = await req.body.episodes.split("_");
            let pushPartialSendEpisode = `${episodes.length}_${partialSendEpisode[0]}_${partialSendEpisode[1]}`;
            episodes.push(pushPartialSendEpisode);

            const updateEpisodes = await List.findOneAndUpdate({name: req.body.name}, {episodes: episodes} );
            return res.json(updateEpisodes);
        }else if(lista === null){
            return res.json({mensaje: `List not Exist`});
        }
    } catch (error) {
        res.json(error);
    }
} 

export const deleteListEpisode: RequestHandler = async(req,res) => {

    try {
        const lista = await List.findOne({name: req.body.name});
        if(lista !== null){
            let episodes = lista.episodes;

            let episodeDelete = req.body.episodes;

            let partialepisodes = [];
            let partialnNewLisEpisode = [];

            for (let i = 0; i < episodes.length; i++) {
                if (episodes[i] !== episodeDelete) {
                    partialepisodes.push(episodes[i]);
                }
            }

            for (let i = 0; i < partialepisodes.length; i++) {
                let partialnSplitNewLisEpisode = partialepisodes[i].split("_");
                partialnNewLisEpisode.push(`${i}_${partialnSplitNewLisEpisode[1]}_${partialnSplitNewLisEpisode[2]}`);
            }

            const updateEpisodes = await List.findOneAndUpdate({name: req.body.name}, {episodes: partialnNewLisEpisode} );
            return res.json(updateEpisodes);
        }else if(lista === null){
            return res.json({mensaje: `List not Exist`});
        }
    } catch (error) {
        res.json(error);
    }
} 
