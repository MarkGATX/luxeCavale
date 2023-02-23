import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import accessoryHeader from '../../images/accessory_header.jpg'
import Image from 'mui-image';
import { QUERY_ACCESSORY_PRODUCT } from "../../utils/queries";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';


export default function AccessoryProduct() {

    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_ACCESSORY_PRODUCT, {
        variables: { id: id },
    });
    // console.log(data.accessorySingleProd.name)

    return (
        <Grid2 container component="main" sx={{ width: `calc(100% - 400px)`, alignContent: 'flex-start' }}>
            <Grid2 xs={7} sx={{ height: '300px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Accessories
                </Typography>
                <Typography>Shop our selection of Accessories</Typography>
            </Grid2>
            <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                <Image height="300px" src={accessoryHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
                }}></Image>
            </Grid2>
            {loading ? (
                <div xs={12}>Loading...</div>
            ) : (
                <Grid2
                    container
                    xs={12}
                    sx={{ justifyContent: "space-around", margin: "0 50px" }}
                >

                    <Grid2
                        xs={12}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            minHeight: "500px",
                            justifyContent: "space-between",
                            paddingBottom: "50px",
                        }}
                    >
                        <Card className='prodCards' sx={{width:'100%'}}>
                            <CardHeader title={data.accessorySingleProd.name} titleTypographyProps={{ style: { fontSize: '1.17em' } }}></CardHeader>
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ width: { s: "100%", md: "60%" } }}>
                                    <Image
                                        src={`${data.accessorySingleProd.imageURL}@0.25x.jpg`}
                                        maxHeight="200px"
                                        shift="right"
                                        distance="100px"
                                        className="productImage"
                                        showLoading
                                        alt={`${data.accessorySingleProd.name} with ${data.accessorySingleProd.attribution}`}
                                    />
                                </Box>
                                <Box sx={{ width: { s: "100%", md: "37%" } }}>
                                    <Typography
                                        variant="body2"

                                    >
                                        <Typography variant='body1'>{data.accessorySingleProd.description}</Typography>
                                        <Typography variant='body1' className='price'>{`$ ${data.accessorySingleProd.price}`}</Typography>
                                    </Typography>



                                </Box>


                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            )}
        </Grid2>
    )
}
