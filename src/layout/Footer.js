import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle } from'@material-ui/core'

export default function Footer() {
    const [open, setOpen] = React.useState(false)
    
    return (
        <>
            <Dialog onClose={()=>setOpen(false)} open={open}>
                {data.map((item) => 
                <>
                    <DialogTitle >
                        {item.name}
                    </DialogTitle>
                    <DialogContent dividers={true}>
                        
                    </DialogContent>
                </>
                )}
            </Dialog>
            <Button onClick={()=>setOpen(true)}>Dialog</Button>
        </>
    )
}

const data = [
    {
      "_id": "5f714a4fecddcda9bd719dc0",
      "isActive": true,
      "name": "Garner Justice",
      "gender": "male",
      "company": "INJOY",
      "email": "garnerjustice@injoy.com",
      "phone": "+1 (817) 510-2679",
      "address": "714 Woodbine Street, Carrizo, Hawaii, 1466",
      "about": "Duis reprehenderit est tempor sunt culpa Lorem Lorem nisi labore incididunt. Dolore magna excepteur dolor veniam veniam sint anim commodo ea et quis consequat. Ex cupidatat exercitation sint sint in ea non sunt labore incididunt ullamco incididunt excepteur. Eu ipsum et amet dolore id exercitation nisi Lorem duis cupidatat deserunt. Anim laboris irure dolore cupidatat aliqua anim ea officia nostrud officia exercitation. Consectetur dolor et duis quis cillum sunt sint fugiat.\r\n",
      "registered": "2019-04-22T04:25:02 +04:00",
      "tags": [
        "in",
        "cillum",
        "eiusmod",
        "consequat",
        "anim",
        "adipisicing",
        "deserunt"
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f714a4fee816221c37b76b3",
      "isActive": false,
      "name": "Buckner Barrett",
      "gender": "male",
      "company": "KEENGEN",
      "email": "bucknerbarrett@keengen.com",
      "phone": "+1 (887) 542-2597",
      "address": "740 Joralemon Street, Cotopaxi, Utah, 1665",
      "about": "Fugiat irure qui quis cillum consequat veniam. Ut eiusmod nulla deserunt adipisicing aliquip elit quis fugiat tempor duis esse do. Nisi mollit commodo nulla dolore nostrud. Veniam proident est exercitation dolor culpa pariatur ex culpa irure exercitation nulla officia veniam. Excepteur aliqua minim aliqua eiusmod excepteur est commodo nostrud ullamco dolor. Quis reprehenderit mollit quis ullamco occaecat qui adipisicing cupidatat voluptate. Incididunt excepteur do consequat eu ad anim eu ad do ut labore.\r\n",
      "registered": "2018-10-18T05:05:57 +04:00",
      "tags": [
        "et",
        "quis",
        "aliquip",
        "sunt",
        "qui",
        "consectetur",
        "ullamco"
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f714a4fc7b152c82fe9d37b",
      "isActive": false,
      "name": "Aileen Sandoval",
      "gender": "female",
      "company": "CIPROMOX",
      "email": "aileensandoval@cipromox.com",
      "phone": "+1 (924) 560-2956",
      "address": "569 Frost Street, Epworth, District Of Columbia, 4390",
      "about": "Enim velit sunt deserunt in. In mollit anim commodo non. Aute nostrud do veniam proident ad aute voluptate incididunt. Reprehenderit non eu do amet id. Deserunt id amet irure eiusmod. Adipisicing et anim reprehenderit in minim.\r\n",
      "registered": "2017-05-26T04:21:34 +04:00",
      "tags": [
        "aliquip",
        "dolore",
        "laboris",
        "mollit",
        "enim",
        "anim",
        "minim"
      ],
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f714a4fb21c08f04aa988cf",
      "isActive": true,
      "name": "Booth Simpson",
      "gender": "male",
      "company": "AUTOMON",
      "email": "boothsimpson@automon.com",
      "phone": "+1 (983) 425-2499",
      "address": "772 Buffalo Avenue, Dahlen, Palau, 4511",
      "about": "Commodo anim culpa dolor nulla officia. Aute enim cupidatat cupidatat minim magna irure fugiat adipisicing reprehenderit labore excepteur. Ipsum sit consequat veniam eu. Qui reprehenderit voluptate minim id cillum ad ad incididunt anim anim.\r\n",
      "registered": "2019-04-04T04:35:57 +04:00",
      "tags": [
        "sunt",
        "nisi",
        "culpa",
        "tempor",
        "eiusmod",
        "magna",
        "cupidatat"
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f714a4f0065549039354465",
      "isActive": false,
      "name": "Gray Burnett",
      "gender": "male",
      "company": "STUCCO",
      "email": "grayburnett@stucco.com",
      "phone": "+1 (810) 474-3708",
      "address": "480 Allen Avenue, Eden, South Dakota, 4529",
      "about": "Excepteur mollit elit anim exercitation labore officia proident esse. Cupidatat ullamco velit sit do velit consequat nulla magna do mollit ipsum. Nisi ea sunt do non tempor amet tempor eu sint et enim exercitation. Fugiat nisi ex cupidatat anim ipsum exercitation sunt exercitation pariatur exercitation dolore culpa. Enim dolor amet eiusmod excepteur nulla occaecat duis cupidatat laboris officia.\r\n",
      "registered": "2016-08-03T05:27:38 +04:00",
      "tags": [
        "est",
        "non",
        "sint",
        "ea",
        "deserunt",
        "adipisicing",
        "veniam"
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f714a4faae2b96676c9f372",
      "isActive": false,
      "name": "Rose Branch",
      "gender": "male",
      "company": "EARTHPURE",
      "email": "rosebranch@earthpure.com",
      "phone": "+1 (968) 422-3255",
      "address": "790 Gain Court, Naomi, Idaho, 2698",
      "about": "Voluptate exercitation ad id dolore dolore fugiat sint esse fugiat esse. Ea aliquip veniam id laboris et nulla ipsum non. Esse laborum occaecat voluptate velit est dolore aliqua id consectetur dolor amet. Mollit dolore culpa cupidatat sit aute veniam incididunt cupidatat fugiat ipsum reprehenderit enim et nisi. Aute occaecat reprehenderit cupidatat aliquip ipsum culpa anim labore. Aute veniam sit consequat anim ipsum ea. Nulla labore ipsum non exercitation minim enim adipisicing quis fugiat fugiat.\r\n",
      "registered": "2015-03-20T01:53:33 +04:00",
      "tags": [
        "sunt",
        "pariatur",
        "magna",
        "duis",
        "proident",
        "laboris",
        "minim"
      ],
      "favoriteFruit": "apple"
    }
  ]