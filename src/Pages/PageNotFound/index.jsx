import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import pageNotFound from "../../Assets/Images/pageNotFound.svg";
import { ContainerNotFound } from "./styles";
import { motion } from 'framer-motion'

const PageNotFound = () => {

    const history = useHistory();

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ContainerNotFound>
            <img src={pageNotFound} alt={pageNotFound} />
            <h2>Ops... parece que não existe nada aqui</h2>
            <Button variant="contained" onClick={() => history.push("/")}>HOME</Button>
        </ContainerNotFound>
    </motion.div>
    )
}

export default PageNotFound;