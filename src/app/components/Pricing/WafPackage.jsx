import React from "react";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const { Title, Text } = Typography;

const columns = [
  {
    id: "feature",
    label: "Feature",
  },
  {
    id: "basic",
    label: "Basic Firewall $9.99/mo",
  },
  {
    id: "pro",
    label: "Pro Firewall $19.99/mo",
  },
  {
    id: "enterprise",
    label: "Enterprise Firewall $49.99/mo",
  },
];

const data = [
  {
    key: "1",
    feature: "DDoS Protection",
    basic: <CheckCircleIcon style={{ color: "#52c41a" }} />,
    pro: <CheckCircleIcon style={{ color: "#52c41a" }} />,
    enterprise: <CheckCircleIcon style={{ color: "#52c41a" }} />,
  },
  {
    key: "2",
    feature: "Malware Scanning",
    basic: <CheckCircleIcon style={{ color: "#52c41a" }} />,
    pro: <CheckCircleIcon style={{ color: "#52c41a" }} />,
    enterprise: <CheckCircleIcon style={{ color: "#52c41a" }} />,
  },
  {
    key: "3",
    feature: "SSL Support",
    basic: "-",
    pro: <CheckCircleIcon style={{ color: "#52c41a" }} />,
    enterprise: <CheckCircleIcon style={{ color: "#52c41a" }} />,
  },
  {
    key: "4",
    feature: "Custom Security Rules",
    basic: "-",
    pro: "-",
    enterprise: <CheckCircleIcon style={{ color: "#52c41a" }} />,
  },
  {
    key: "5",
    feature: "",
    basic: (
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: "#1C3765", color: "white" }}
      >
        Get Started
      </Button>
    ),
    pro: (
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: "#1C3765", color: "white" }}
      >
        Get Started
      </Button>
    ),
    enterprise: (
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: "#1C3765", color: "white" }}
      >
        Get Started
      </Button>
    ),
  },
];

export default function WafPackage() {
  return (
   <h1>HI</h1>
  );
}
