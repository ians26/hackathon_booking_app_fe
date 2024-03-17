"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogPortal,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateBookingForm from "./CreateBookingForm";

export default function OfficeMap() {
  const [reservedSeats, setReservedSeats] = useState([]);
  const [clickedSeat, setClickedSeat] = useState(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const reservedSeatIdsFromBackend = ["seatid1", "seatid3", "seatid5"];
    setReservedSeats(reservedSeatIdsFromBackend);
  }, []);

  const handleClick = (event) => {
    const seatId = event.target.getAttribute("seatid");
    setClickedSeat(seatId);
  };

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.querySelectorAll("path").forEach((element) => {
        const seatid = element.getAttribute("seatid");
        const isReserved = reservedSeats.includes(seatid);
        element.addEventListener("mouseenter", function () {
          if (!isReserved) {
            element.classList.add("fill-green-700");
          }
        });

        element.addEventListener("mouseleave", function () {
          if (!isReserved) {
            element.classList.remove("fill-green-700");
          }
        });
        element.classList.toggle("fill-green-500", !isReserved);
        element.classList.toggle("fill-red-500", isReserved);
      });
    }
  }, [reservedSeats]);

  return reservedSeats.length ? (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 508 285.75"
        className="fixed overflow-hidden "
      >
        <g ref={svgRef} onClick={handleClick}>
          <path
            seatid="seatid1"
            strokeWidth="0.073"
            d="M9.889 221.231H24.441V235.783H9.889z"
          ></path>
          <path
            seatid="seatid2"
            strokeWidth="0.073"
            d="M27.09 221.231H41.641999999999996V235.783H27.09z"
          ></path>
          <path
            seatid="seatid3"
            strokeWidth="0.073"
            d="M9.889 203.456H24.441V218.00799999999998H9.889z"
          ></path>
          <path
            seatid="seatid4"
            strokeWidth="0.073"
            d="M27.09 203.456H41.641999999999996V218.00799999999998H27.09z"
          ></path>
          <path
            seatid="seatid5"
            strokeWidth="0.073"
            d="M9.889 157.108H24.441V171.66H9.889z"
          ></path>
          <path
            seatid="seatid6"
            strokeWidth="0.073"
            d="M27.09 157.108H41.641999999999996V171.66H27.09z"
          ></path>
          <path
            seatid="seatid7"
            strokeWidth="0.073"
            d="M9.889 139.334H24.441V153.886H9.889z"
          ></path>
          <path
            seatid="seatid8"
            strokeWidth="0.073"
            d="M27.09 139.334H41.641999999999996V153.886H27.09z"
          ></path>
          <path
            seatid="seatid9"
            strokeWidth="0.073"
            d="M9.889 87.638H24.441V102.19H9.889z"
          ></path>
          <path
            seatid="seatid10"
            strokeWidth="0.073"
            d="M27.09 87.638H41.641999999999996V102.19H27.09z"
          ></path>
          <path
            seatid="seatid11"
            strokeWidth="0.073"
            d="M9.889 69.864H24.441V84.416H9.889z"
          ></path>
          <path
            seatid="seatid12"
            strokeWidth="0.073"
            d="M27.09 69.864H41.641999999999996V84.416H27.09z"
          ></path>
          <path
            seatid="seatid13"
            strokeWidth="0.073"
            d="M5.611 29.729H20.163V44.281H5.611z"
          ></path>
          <path
            seatid="seatid14"
            strokeWidth="0.073"
            d="M22.811 29.729H37.363V44.281H22.811z"
          ></path>
          <path
            seatid="seatid15"
            strokeWidth="0.073"
            d="M5.611 11.955H20.163V26.506999999999998H5.611z"
          ></path>
          <path
            seatid="seatid16"
            strokeWidth="0.073"
            d="M22.811 11.955H37.363V26.506999999999998H22.811z"
          ></path>
          <path
            seatid="seatid17"
            strokeWidth="0.073"
            d="M46.128 29.729H60.68V44.281H46.128z"
          ></path>
          <path
            seatid="seatid18"
            strokeWidth="0.073"
            d="M63.329 29.729H77.881V44.281H63.329z"
          ></path>
          <path
            seatid="seatid19"
            strokeWidth="0.073"
            d="M46.128 11.955H60.68V26.506999999999998H46.128z"
          ></path>
          <path
            seatid="seatid20"
            strokeWidth="0.073"
            d="M63.329 11.955H77.881V26.506999999999998H63.329z"
          ></path>
          <path
            seatid="seatid21"
            strokeWidth="0.073"
            d="M86.645 29.729H101.197V44.281H86.645z"
          ></path>
          <path
            seatid="seatid22"
            strokeWidth="0.073"
            d="M103.846 29.729H118.398V44.281H103.846z"
          ></path>
          <path
            seatid="seatid23"
            strokeWidth="0.073"
            d="M86.645 11.955H101.197V26.506999999999998H86.645z"
          ></path>
          <path
            seatid="seatid24"
            strokeWidth="0.073"
            d="M103.846 11.955H118.398V26.506999999999998H103.846z"
          ></path>
          <path
            seatid="seatid25"
            strokeWidth="0.073"
            d="M199.125 29.729H213.677V44.281H199.125z"
          ></path>
          <path
            seatid="seatid26"
            strokeWidth="0.073"
            d="M216.325 29.729H230.87699999999998V44.281H216.325z"
          ></path>
          <path
            seatid="seatid27"
            strokeWidth="0.073"
            d="M199.125 11.955H213.677V26.506999999999998H199.125z"
          ></path>
          <path
            seatid="seatid28"
            strokeWidth="0.073"
            d="M216.325 11.955H230.87699999999998V26.506999999999998H216.325z"
          ></path>
          <path
            seatid="seatid29"
            strokeWidth="0.073"
            d="M238.163 29.729H252.715V44.281H238.163z"
          ></path>
          <path
            seatid="seatid30"
            strokeWidth="0.073"
            d="M255.364 29.729H269.916V44.281H255.364z"
          ></path>
          <path
            seatid="seatid31"
            strokeWidth="0.073"
            d="M238.163 11.955H252.715V26.506999999999998H238.163z"
          ></path>
          <path
            seatid="seatid32"
            strokeWidth="0.073"
            d="M255.364 11.955H269.916V26.506999999999998H255.364z"
          ></path>
          <path
            seatid="seatid33"
            strokeWidth="0.073"
            d="M277.202 29.729H291.754V44.281H277.202z"
          ></path>
          <path
            seatid="seatid34"
            strokeWidth="0.073"
            d="M294.403 29.729H308.95500000000004V44.281H294.403z"
          ></path>
          <path
            seatid="seatid35"
            strokeWidth="0.073"
            d="M277.202 11.955H291.754V26.506999999999998H277.202z"
          ></path>
          <path
            seatid="seatid36"
            strokeWidth="0.073"
            d="M294.403 11.955H308.95500000000004V26.506999999999998H294.403z"
          ></path>
          <path
            seatid="seatid37"
            strokeWidth="0.073"
            d="M316.241 29.729H330.793V44.281H316.241z"
          ></path>
          <path
            seatid="seatid38"
            strokeWidth="0.073"
            d="M333.442 29.729H347.994V44.281H333.442z"
          ></path>
          <path
            seatid="seatid39"
            strokeWidth="0.073"
            d="M316.241 11.955H330.793V26.506999999999998H316.241z"
          ></path>
          <path
            seatid="seatid40"
            strokeWidth="0.073"
            d="M333.442 11.955H347.994V26.506999999999998H333.442z"
          ></path>
          <path
            seatid="seatid41"
            strokeWidth="0.073"
            d="M355.28 29.729H369.832V44.281H355.28z"
          ></path>
          <path
            seatid="seatid42"
            strokeWidth="0.073"
            d="M372.48 29.729H387.03200000000004V44.281H372.48z"
          ></path>
          <path
            seatid="seatid43"
            strokeWidth="0.073"
            d="M355.28 11.955H369.832V26.506999999999998H355.28z"
          ></path>
          <path
            seatid="seatid44"
            strokeWidth="0.073"
            d="M372.48 11.955H387.03200000000004V26.506999999999998H372.48z"
          ></path>
          <path
            seatid="seatid45"
            strokeWidth="0.073"
            d="M394.318 29.729H408.87V44.281H394.318z"
          ></path>
          <path
            seatid="seatid46"
            strokeWidth="0.073"
            d="M411.519 29.729H426.071V44.281H411.519z"
          ></path>
          <path
            seatid="seatid47"
            strokeWidth="0.073"
            d="M394.318 11.955H408.87V26.506999999999998H394.318z"
          ></path>
          <path
            seatid="seatid48"
            strokeWidth="0.073"
            d="M411.519 11.955H426.071V26.506999999999998H411.519z"
          ></path>
          <path
            seatid="seatid49"
            strokeWidth="0.073"
            d="M433.357 29.729H447.90900000000005V44.281H433.357z"
          ></path>
          <path
            seatid="seatid50"
            strokeWidth="0.073"
            d="M450.558 29.729H465.11V44.281H450.558z"
          ></path>
          <path
            seatid="seatid51"
            strokeWidth="0.073"
            d="M433.357 11.955H447.90900000000005V26.506999999999998H433.357z"
          ></path>
          <path
            seatid="seatid52"
            strokeWidth="0.073"
            d="M450.558 11.955H465.11V26.506999999999998H450.558z"
          ></path>
          <path
            seatid="seatid53"
            strokeWidth="0.073"
            d="M472.396 29.729H486.94800000000004V44.281H472.396z"
          ></path>
          <path
            seatid="seatid54"
            strokeWidth="0.073"
            d="M489.597 29.729H504.149V44.281H489.597z"
          ></path>
          <path
            seatid="seatid55"
            strokeWidth="0.073"
            d="M472.396 11.955H486.94800000000004V26.506999999999998H472.396z"
          ></path>
          <path
            seatid="seatid56"
            strokeWidth="0.073"
            d="M489.597 11.955H504.149V26.506999999999998H489.597z"
          ></path>
          <path
            seatid="seatid57"
            strokeWidth="0.073"
            d="M377.118 109.733H391.67V124.285H377.118z"
          ></path>
          <path
            seatid="seatid58"
            strokeWidth="0.073"
            d="M394.318 109.733H408.87V124.285H394.318z"
          ></path>
          <path
            seatid="seatid59"
            strokeWidth="0.073"
            d="M377.118 91.959H391.67V106.511H377.118z"
          ></path>
          <path
            seatid="seatid60"
            strokeWidth="0.073"
            d="M394.318 91.959H408.87V106.511H394.318z"
          ></path>
          <path
            seatid="seatid61"
            strokeWidth="0.073"
            d="M416.156 109.733H430.708V124.285H416.156z"
          ></path>
          <path
            seatid="seatid62"
            strokeWidth="0.073"
            d="M433.357 109.733H447.90900000000005V124.285H433.357z"
          ></path>
          <path
            seatid="seatid63"
            strokeWidth="0.073"
            d="M416.156 91.959H430.708V106.511H416.156z"
          ></path>
          <path
            seatid="seatid64"
            strokeWidth="0.073"
            d="M433.357 91.959H447.90900000000005V106.511H433.357z"
          ></path>
          <path
            seatid="seatid65"
            strokeWidth="0.073"
            d="M355.28 207.511H369.832V222.063H355.28z"
          ></path>
          <path
            seatid="seatid66"
            strokeWidth="0.073"
            d="M372.48 207.511H387.03200000000004V222.063H372.48z"
          ></path>
          <path
            seatid="seatid67"
            strokeWidth="0.073"
            d="M355.28 189.737H369.832V204.289H355.28z"
          ></path>
          <path
            seatid="seatid68"
            strokeWidth="0.073"
            d="M372.48 189.737H387.03200000000004V204.289H372.48z"
          ></path>
          <path
            seatid="seatid69"
            strokeWidth="0.073"
            d="M394.318 207.511H408.87V222.063H394.318z"
          ></path>
          <path
            seatid="seatid70"
            strokeWidth="0.073"
            d="M411.519 207.511H426.071V222.063H411.519z"
          ></path>
          <path
            seatid="seatid71"
            strokeWidth="0.073"
            d="M394.318 189.737H408.87V204.289H394.318z"
          ></path>
          <path
            seatid="seatid72"
            strokeWidth="0.073"
            d="M411.519 189.737H426.071V204.289H411.519z"
          ></path>
          <path
            seatid="seatid73"
            strokeWidth="0.073"
            d="M433.357 207.511H447.90900000000005V222.063H433.357z"
          ></path>
          <path
            seatid="seatid74"
            strokeWidth="0.073"
            d="M450.558 207.511H465.11V222.063H450.558z"
          ></path>
          <path
            seatid="seatid75"
            strokeWidth="0.073"
            d="M433.357 189.737H447.90900000000005V204.289H433.357z"
          ></path>
          <path
            seatid="seatid76"
            strokeWidth="0.073"
            d="M450.558 189.737H465.11V204.289H450.558z"
          ></path>
          <path
            seatid="seatid77"
            strokeWidth="0.073"
            d="M411.519 171.963H426.071V186.515H411.519z"
          ></path>
          <path
            seatid="seatid78"
            strokeWidth="0.073"
            d="M433.357 171.963H447.90900000000005V186.515H433.357z"
          ></path>
          <path
            seatid="seatid79"
            strokeWidth="0.073"
            d="M450.558 171.963H465.11V186.515H450.558z"
          ></path>
          <path
            seatid="seatid80"
            strokeWidth="0.073"
            d="M33.045 267.579H47.597V282.13100000000003H33.045z"
          ></path>
          <path
            seatid="seatid81"
            strokeWidth="0.073"
            d="M50.246 267.579H64.798V282.13100000000003H50.246z"
          ></path>
          <path
            seatid="seatid82"
            strokeWidth="0.073"
            d="M33.045 249.804H47.597V264.356H33.045z"
          ></path>
          <path
            seatid="seatid83"
            strokeWidth="0.073"
            d="M50.246 249.804H64.798V264.356H50.246z"
          ></path>
          <path
            seatid="seatid84"
            strokeWidth="0.073"
            d="M72.084 267.579H86.636V282.13100000000003H72.084z"
          ></path>
          <path
            seatid="seatid85"
            strokeWidth="0.073"
            d="M89.284 267.579H103.83600000000001V282.13100000000003H89.284z"
          ></path>
          <path
            seatid="seatid86"
            strokeWidth="0.073"
            d="M72.084 249.804H86.636V264.356H72.084z"
          ></path>
          <path
            seatid="seatid87"
            strokeWidth="0.073"
            d="M89.284 249.804H103.83600000000001V264.356H89.284z"
          ></path>
          <path
            seatid="seatid88"
            strokeWidth="0.073"
            d="M111.122 267.579H125.674V282.13100000000003H111.122z"
          ></path>
          <path
            seatid="seatid89"
            strokeWidth="0.073"
            d="M128.323 267.579H142.875V282.13100000000003H128.323z"
          ></path>
          <path
            seatid="seatid90"
            strokeWidth="0.073"
            d="M111.122 249.804H125.674V264.356H111.122z"
          ></path>
          <path
            seatid="seatid91"
            strokeWidth="0.073"
            d="M128.323 249.804H142.875V264.356H128.323z"
          ></path>
          <path
            seatid="seatid92"
            strokeWidth="0.073"
            d="M150.161 267.579H164.713V282.13100000000003H150.161z"
          ></path>
          <path
            seatid="seatid93"
            strokeWidth="0.073"
            d="M167.362 267.579H181.914V282.13100000000003H167.362z"
          ></path>
          <path
            seatid="seatid94"
            strokeWidth="0.073"
            d="M150.161 249.804H164.713V264.356H150.161z"
          ></path>
          <path
            seatid="seatid95"
            strokeWidth="0.073"
            d="M167.362 249.804H181.914V264.356H167.362z"
          ></path>
          <path
            seatid="seatid96"
            strokeWidth="0.073"
            d="M189.2 267.579H203.75199999999998V282.13100000000003H189.2z"
          ></path>
          <path
            seatid="seatid97"
            strokeWidth="0.073"
            d="M206.401 267.579H220.953V282.13100000000003H206.401z"
          ></path>
          <path
            seatid="seatid98"
            strokeWidth="0.073"
            d="M189.2 249.804H203.75199999999998V264.356H189.2z"
          ></path>
          <path
            seatid="seatid99"
            strokeWidth="0.073"
            d="M206.401 249.804H220.953V264.356H206.401z"
          ></path>
          <path
            seatid="seatid100"
            strokeWidth="0.073"
            d="M230.887 267.579H245.439V282.13100000000003H230.887z"
          ></path>
          <path
            seatid="seatid101"
            strokeWidth="0.073"
            d="M248.088 267.579H262.64V282.13100000000003H248.088z"
          ></path>
          <path
            seatid="seatid102"
            strokeWidth="0.073"
            d="M230.887 249.804H245.439V264.356H230.887z"
          ></path>
          <path
            seatid="seatid103"
            strokeWidth="0.073"
            d="M248.088 249.804H262.64V264.356H248.088z"
          ></path>
          <path
            seatid="seatid104"
            strokeWidth="0.073"
            d="M269.926 267.579H284.478V282.13100000000003H269.926z"
          ></path>
          <path
            seatid="seatid105"
            strokeWidth="0.073"
            d="M287.127 267.579H301.67900000000003V282.13100000000003H287.127z"
          ></path>
          <path
            seatid="seatid106"
            strokeWidth="0.073"
            d="M269.926 249.804H284.478V264.356H269.926z"
          ></path>
          <path
            seatid="seatid107"
            strokeWidth="0.073"
            d="M287.127 249.804H301.67900000000003V264.356H287.127z"
          ></path>
          <path
            seatid="seatid108"
            strokeWidth="0.073"
            d="M308.965 267.579H323.517V282.13100000000003H308.965z"
          ></path>
          <path
            seatid="seatid109"
            strokeWidth="0.073"
            d="M326.166 267.579H340.718V282.13100000000003H326.166z"
          ></path>
          <path
            seatid="seatid110"
            strokeWidth="0.073"
            d="M308.965 249.804H323.517V264.356H308.965z"
          ></path>
          <path
            seatid="seatid111"
            strokeWidth="0.073"
            d="M326.166 249.804H340.718V264.356H326.166z"
          ></path>
          <path
            seatid="seatid112"
            strokeWidth="0.073"
            d="M72.084 228.117H86.636V242.66899999999998H72.084z"
          ></path>
          <path
            seatid="seatid113"
            strokeWidth="0.073"
            d="M89.284 228.117H103.83600000000001V242.66899999999998H89.284z"
          ></path>
          <path
            seatid="seatid114"
            strokeWidth="0.073"
            d="M72.084 210.343H86.636V224.89499999999998H72.084z"
          ></path>
          <path
            seatid="seatid115"
            strokeWidth="0.073"
            d="M89.284 210.343H103.83600000000001V224.89499999999998H89.284z"
          ></path>
          <path
            seatid="seatid116"
            strokeWidth="0.073"
            d="M111.122 228.117H125.674V242.66899999999998H111.122z"
          ></path>
          <path
            seatid="seatid117"
            strokeWidth="0.073"
            d="M128.323 228.117H142.875V242.66899999999998H128.323z"
          ></path>
          <path
            seatid="seatid118"
            strokeWidth="0.073"
            d="M111.122 210.343H125.674V224.89499999999998H111.122z"
          ></path>
          <path
            seatid="seatid119"
            strokeWidth="0.073"
            d="M128.323 210.343H142.875V224.89499999999998H128.323z"
          ></path>
          <path
            seatid="seatid120"
            strokeWidth="0.073"
            d="M150.161 228.117H164.713V242.66899999999998H150.161z"
          ></path>
          <path
            seatid="seatid121"
            strokeWidth="0.073"
            d="M167.362 228.117H181.914V242.66899999999998H167.362z"
          ></path>
          <path
            seatid="seatid122"
            strokeWidth="0.073"
            d="M150.161 210.343H164.713V224.89499999999998H150.161z"
          ></path>
          <path
            seatid="seatid123"
            strokeWidth="0.073"
            d="M167.362 210.343H181.914V224.89499999999998H167.362z"
          ></path>
          <path
            seatid="seatid124"
            strokeWidth="0.073"
            d="M230.887 228.117H245.439V242.66899999999998H230.887z"
          ></path>
          <path
            seatid="seatid125"
            strokeWidth="0.073"
            d="M248.088 228.117H262.64V242.66899999999998H248.088z"
          ></path>
          <path
            seatid="seatid126"
            strokeWidth="0.073"
            d="M230.887 210.343H245.439V224.89499999999998H230.887z"
          ></path>
          <path
            seatid="seatid127"
            strokeWidth="0.073"
            d="M248.088 210.343H262.64V224.89499999999998H248.088z"
          ></path>
          <path
            seatid="seatid128"
            strokeWidth="0.073"
            d="M348.013 267.579H362.565V282.13100000000003H348.013z"
          ></path>
          <path
            seatid="seatid129"
            strokeWidth="0.073"
            d="M365.214 267.579H379.766V282.13100000000003H365.214z"
          ></path>
          <path
            seatid="seatid130"
            strokeWidth="0.073"
            d="M348.013 249.804H362.565V264.356H348.013z"
          ></path>
          <path
            seatid="seatid131"
            strokeWidth="0.073"
            d="M365.214 249.804H379.766V264.356H365.214z"
          ></path>
          <path
            seatid="seatid132"
            strokeWidth="0.073"
            d="M388.36 267.579H402.91200000000003V282.13100000000003H388.36z"
          ></path>
          <path
            seatid="seatid133"
            strokeWidth="0.073"
            d="M405.561 267.579H420.113V282.13100000000003H405.561z"
          ></path>
          <path
            seatid="seatid134"
            strokeWidth="0.073"
            d="M388.36 249.804H402.91200000000003V264.356H388.36z"
          ></path>
          <path
            seatid="seatid135"
            strokeWidth="0.073"
            d="M405.561 249.804H420.113V264.356H405.561z"
          ></path>
          <path
            seatid="seatid136"
            strokeWidth="0.2"
            d="M122.344 11.955H144.594V47.503H122.344z"
          ></path>
          <path
            seatid="seatid137"
            strokeWidth="0.2"
            d="M147.75 11.955H170V47.503H147.75z"
          ></path>
          <path
            seatid="seatid138"
            strokeWidth="0.188"
            d="M172.264 11.955H191.83800000000002V47.503H172.264z"
          ></path>
          <path
            seatid="seatid139"
            strokeWidth="0.265"
            d="M426.071 249.804H480.28400000000005V280.563H426.071z"
          ></path>
          <path
            seatid="seatid140"
            strokeWidth="0.265"
            d="M487.546 219.023H508V285.75H487.546z"
          ></path>
          <path
            seatid="seatid141"
            strokeWidth="0.252"
            d="M99.067 89.992H167.87V158.578H99.067z"
          ></path>
        </g>
      </svg>
      {clickedSeat && (
        <Dialog
          open={clickedSeat !== null}
          onOpenChange={() => setClickedSeat(null)}
        >
          <DialogPortal>
            <DialogContent>
              <DialogTitle>Book a Seat</DialogTitle>
              <DialogDescription>
                {/* Customize this description with seat information */}
                Book seat: {clickedSeat}
              </DialogDescription>
              <CreateBookingForm></CreateBookingForm>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </div>
  ) : null;
}
