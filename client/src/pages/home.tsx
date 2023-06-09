import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components/index";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;

  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        DashBoard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#002fa7", "#66e691"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#002fa7", "#e4b8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          series={[75, 25]}
          colors={["#002fa7", "#e8ec72"]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={["#002fa7", "#ed7676"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Stack mt="25px" width="100%" flexWrap="wrap" direction="row" gap={4}>
        <TopAgent />

        <Box
          flex={1}
          borderRadius="15px"
          padding="20px"
          bgcolor="#FCFCFC"
          display="flex"
          flexDirection="column"
          minWidth={{ xs: "100%", sm: 450 }}
        >
          <Typography fontSize={18} fontWeight={600} color="#11142D">
            Latest Properties
          </Typography>

          <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {latestProperties.map((property) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                location={property.location}
                price={property.price}
                photo={property.photo}
              />
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
