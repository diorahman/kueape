var biddings = []

var bidding1 = {
  id : '7ca1cf71-bc42-4525-8a1d-a6f3e144658c',
  title : 'Tender Peralatan Rumah Sebelah',
  description : 'Tender Peralatan Rumah Sebelah adalah ...',
  hps : '50000000',
  important_dates : [
    { name : "pembukaan",
      title : "Pembukaan Tender",
      description : "Pembukaan Tender adalah pembukaan tender",
      date : "2013-12-01T00:00:00.000Z"
    },
    { name : "penawaran",
      title : "Penawaran Tender", 
      description : "Penawaran Tender adalah penawaran tender",
      date : "2013-12-07T00:00:00.000Z"
    },
    { name : "penutupan",
      title : "Penutupan Tender", 
      description : "Penutupan Tender adalah penutupan tender",
      date : "2013-12-15T00:00:00.000Z"
    }
  ],
  documents : {
    download : [
      {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1 yang memuat peraturan 1", url : "https://i.cloudup.com/ttgYoid5xP.pdf"},
      {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2 yang memuat peraturan 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png"},
      {name : "dok3", title : "Dokumen 3", description : "Dokumen 3 berisi dokumen 3 yang memuat peraturan 3", url : "https://i.cloudup.com/LMqykE57J5.png"}
    ],
    upload : [
      {name : "dok1", title : "Dokumen 1", description: "Dokumen 1 adalah dokumen 1", package: 1},
      {name : "dok2", title : "Dokumen 2", description: "Dokumen 1 adalah dokumen 2", package: 1},
      {name : "dok3", title : "Dokumen 3", description: "Dokumen 1 adalah dokumen 3", package: 1},
      {name : "dok4", title : "Dokumen 4", description: "Dokumen 1 adalah dokumen 4", package: 1},
      {name : "dok5", title : "Dokumen 5", description: "Dokumen 1 adalah dokumen 5", package: 2},
      {name : "dok6", title : "Dokumen 6", description: "Dokumen 1 adalah dokumen 6", package: 2}
    ],
    form : [
      {name : "form1", title : "Form 1", description: "Form 1 adalah form 1", url: "http://localhost:3001/form1.html", package: 1},
      {name : "form2", title : "Form 2", description: "Form 1 adalah form 2", url: "http://localhost:3001/form2.html", package: 1},
      {name : "form3", title : "Form 3", description: "Form 1 adalah form 3", url: "http://localhost:3001/form1.html", package: 1},
    ]
  },
  keys : [
    {package : 1, key: "key1"},
    {package : 2, key: "key2"}
  ],
  sorting : {
      form : "form1",
      system : true
  },
  participants : [
    {
      id : 1,
      name : "Dhi Aurrahman",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    },
    {
      id : 2,
      name : "Budi Sudjatmiko",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    },
    {
      id : 3,
      name : "Wati Sukotjo",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    }
  ],
  pagination : {
    total : 3
  }
}

var bidding2 = {
  id : '7ca1cf71-bc42-4526-8a1d-a6f3e144658c',
  hps : '50000001',
  title : 'Tender Peralatan Rumah Tetangga',
  description : 'Tender Peralatan Rumah Sebelah adalah ...',
  important_dates : [
    { name : "pembukaan",
      title : "Pembukaan Tender",
      description : "Pembukaan Tender adalah pembukaan tender",
      date : "2013-12-01T00:00:00.000Z"
    },
    { name : "penawaran",
      title : "Penawaran Tender", 
      description : "Penawaran Tender adalah penawaran tender",
      date : "2013-12-07T00:00:00.000Z"
    },
    { name : "penutupan",
      title : "Penutupan Tender", 
      description : "Penutupan Tender adalah penutupan tender",
      date : "2013-12-15T00:00:00.000Z"
    }
  ],
  documents : {
    download : [
      {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png"},
      {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png"},
      {name : "dok3", title : "Dokumen 3", description : "Dokumen 3 berisi dokumen 3", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png"}
    ],
    upload : [
      {name : "dok1", title : "Dokumen 1", description: "Dokumen 1 adalah dokumen 1", package: 1},
      {name : "dok2", title : "Dokumen 2", description: "Dokumen 1 adalah dokumen 2", package: 1},
      {name : "dok3", title : "Dokumen 3", description: "Dokumen 1 adalah dokumen 3", package: 1},
      {name : "dok4", title : "Dokumen 4", description: "Dokumen 1 adalah dokumen 4", package: 1},
      {name : "dok5", title : "Dokumen 5", description: "Dokumen 1 adalah dokumen 5", package: 2},
      {name : "dok6", title : "Dokumen 6", description: "Dokumen 1 adalah dokumen 6", package: 2}
    ],
    form : [
      {name : "form1", title : "Form 1", description: "Form 1 adalah form 1", url: "http://localhost:3001/form1.html", package: 1},
      {name : "form2", title : "Form 2", description: "Form 1 adalah form 2", url: "http://localhost:3001/form2.html", package: 1},
      {name : "form3", title : "Form 3", description: "Form 1 adalah form 3", url: "http://localhost:3001/form1.html", package: 1},
    ]
  },
  keys : [
    {package : 1, key: "key1"},
    {package : 2, key: "key2"}
  ],
  sorting : {
      form : "form1",
      system : true
  },
  participants : [
    {
      id : 1,
      name : "Dhi Aurrahman",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    },
    {
      id : 2,
      name : "Budi Sudjatmiko",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    },
    {
      id : 3,
      name : "Wati Sukotjo",
      documents : [
        {name : "dok1", title : "Dokumen 1", description : "Dokumen 1 berisi dokumen 1", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 1},
        {name : "dok2", title : "Dokumen 2", description : "Dokumen 2 berisi dokumen 2", url : "http://f.cl.ly/items/0G1O3M0B251D301E3W3I/Screen%20Shot%202013-05-26%20at%2012.49.04%20PM.png", package : 2}
      ],
      forms : [
        {name : "form1", title : "Form1 1", description : "Form 1 berisi form 1", package : 1 },
      ]
    }
  ],
  pagination : {
    total : 3
  }
}

biddings.push(bidding1)
biddings.push(bidding2)

var db = {
  biddings : {}
}

for(var i = 0; i < biddings.length; i++){
  db.biddings[biddings[i].id] = biddings[i]
}

var db = {
  biddings : biddings
}

function get(id, role, participant, cb){
  for(var i = 0; i < biddings.length; i++){
    if(biddings[i].id == id) {
      var bid = biddings[i]
      
      if(role == 'PARTICIPANT'){
        
        return cb(null, {
          id: bid.id,
          hps : bid.hps,
          title : bid.title,
          description : bid.description,
          important_dates : bid.important_dates,
          documents : bid.documents,
          keys : bid.keys
        })
      }
      else if(role == 'COMMITTEE'){

        if(!participant){
          var docs = {download : bid.documents.download}
          return cb(null, {
            id: bid.id,
            hps : bid.hps,
            title : bid.title,
            description : bid.description,
            important_dates : bid.important_dates,
            documents : docs,
            keys : bid.keys,
            participants : true
          })

        }else{

          var q = participant

          var skip = q.skip > -1 ? q.skip : 0
          var count = q.count > 0 ? q.count : 10

          if(skip > -1 && count > 0 ){
            var p = []
            for(var j = 0; j < bid.participants.length; j++){
              if(j >= skip){
                p.push(bid.participants[j])
              }
              if(p.length == count) break;
            }

            return cb(null, {
              participants : p,
              pagination : bid.pagination
            })
          }
        }
        
      }
      else return cb(new Error("Invalid role"))
    }
  }
  cb(new Error("Bidding not found"))
}

module.exports = {
  get : get
}


