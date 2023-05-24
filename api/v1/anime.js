const express = require('express');
const router = express.Router();

const animeList = [
    { name: 'Attack on Titan', year: 2013 },
    { name: 'Death Note', year: 2006 },
    { name: 'One Piece', year: 1999 },
    { name: 'Naruto', year: 2002 },
    { name: 'Dragon Ball Z', year: 1989 },
    { name: 'Fullmetal Alchemist: Brotherhood', year: 2009 },
    { name: 'My Hero Academia', year: 2016 },
    { name: 'Demon Slayer', year: 2019 },
    { name: 'Cowboy Bebop', year: 1998 },
    { name: 'Sword Art Online', year: 2012 }
];

// using query
router.get('/', function(req,res){
    let id = req.query.id;
    let limited = req.query.limited;
    if(id!=null){
        if(id> 0 && id <= animeList.length){
            return res.status(200).json(animeList[id-1]);
        }else{
            return res.status(404).json({
                message: 'Invalid Entry'
            })
        }
    }
    if(limited !=null){
        let newanimeList = animeList.slice(0,limited)
        return res.status(200).json(newanimeList);
    }
    return res.status(200).json(animeList);
})

// using params
router.get('/:index', function(req,res){
    const index = parseInt(req.params.index);

    if(index > 0 && index <= animeList.length){
        return res.status(200).json(animeList[index-1]);
    }else{
        return res.status(404).json({
            message: 'Invalid Entry'
        })
    }
})

module.exports = router;