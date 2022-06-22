import Link from "next/link";
import { Box } from "@chakra-ui/react";

export default function Eror() {
  return (
    <Box display="grid" placeItems="center" minH="100vh" w="100%">
      <Link href="/">
        <a className="text-bold bg-teal-800 p-5 rounded-xl text-white text-4xl">
          404 - Page Not Found |Go back home
        </a>
      </Link>
    </Box>
  );
}
