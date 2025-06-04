import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDelDialog, setOpenDelDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  useEffect(() => {
    let apiUrl = "https://6836b640664e72d28e41c577.mockapi.io/char";
    axios.get(apiUrl).then((res) => setCharacters(res.data));
  }, [openAddDialog, openDelDialog, openEditDialog]);
  return (
    <div>
      <Cards
        characters={characters}
        openAddDialog={openAddDialog}
        setOpenAddDialog={setOpenAddDialog}
        openDelDialog={openDelDialog}
        setOpenDelDialog={setOpenDelDialog}
        openEditDialog={openEditDialog}
        setOpenEditDialog={setOpenEditDialog}
      />
    </div>
  );
}

export default Home;
