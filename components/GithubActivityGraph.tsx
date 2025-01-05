import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
  } from "recharts";
  import {
    NameType,
    ValueType,
  } from "recharts/types/component/DefaultTooltipContent";
  
  import AnimatedHeading from "./FramerMotion/AnimatedHeading";
  import AnimatedText from "./FramerMotion/AnimatedText";
  import React from "react";
  import fetcher from "lib/fetcher";
  import { getFormattedDate } from "@utils/date";
  import { opacityVariant } from "@content/FramerMotionVariants";
  import useSWR from "swr";
  
  export default function GitHubActivityGraph() {
    const { data: githubActivity } = useSWR(
      "/api/stats/github-contribution",
      fetcher
    );
  
    return (
      <>
        <div className="font-barlow mb-10 max-w-full">
          <AnimatedHeading
            variants={opacityVariant}
            className="text-3xl font-bold capitalize sm:text-4xl text-neutral-900 dark:text-neutral-200"
          >
            Graphe d'activités Github
          </AnimatedHeading>
          <AnimatedText
            variants={opacityVariant}
            className="my-4 text-gray-700 dark:text-gray-300"
          >
            Un graphique d'activité généré dynamiquement pour afficher mes activités GitHub des 31 derniers jours.
          </AnimatedText>
          <ResponsiveContainer width="100%" height={300}>
            {githubActivity?.contributions ? (
              <AreaChart
                width={730}
                height={250}
                data={githubActivity?.contributions}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={"#26a64160"}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={"#26a64160"}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="shortDate" />
                <YAxis />
                <CartesianGrid
                  strokeDasharray="2 3"
                  stroke={"#ffffff20"}
                />
                <Tooltip content={<ContributionsToolTip />} />
                <Area
                  dot
                  activeDot
                  strokeWidth={3}
                  type="monotone"
                  dataKey="contributionCount"
                  aria-label="count"
                  stroke={"#26a641"}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            ) : (
              <LoadingAreaChart />
            )}
          </ResponsiveContainer>
        </div>
        <div className="font-barlow mb-10 max-w-full">
          <AnimatedHeading
            variants={opacityVariant}
            className="text-3xl font-bold capitalize sm:text-4xl text-neutral-900 dark:text-neutral-200"
          >
            Ma productivité par jour de la semaine
          </AnimatedHeading>
          <AnimatedText
            variants={opacityVariant}
            className="my-4 text-gray-700 dark:text-gray-300"
          >
            Une représentation visuelle de ma productivité basée sur le nombre de contributions effectuées chaque jour de la semaine.
          </AnimatedText>
          <ResponsiveContainer width="100%" height={300}>
            {githubActivity?.contributionCountByDayOfWeek ? (
              <BarChart
                width={730}
                height={250}
                data={githubActivity?.contributionCountByDayOfWeek}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="2 3"
                  stroke={"#ffffff50"}
                />
                <XAxis dataKey="day" />
                <YAxis />
  
                <Tooltip content={<ContributionCountByDayOfWeekToolTip />} />
                <Bar dataKey="count" fill="#26a641" />
              </BarChart>
            ) : (
              <LoadingBarChart />
            )}
          </ResponsiveContainer>
        </div>
      </>
    );
  }
  
  const ContributionsToolTip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-5 rounded-md bg-customLight text-white dark:text-gray-200 text-sm max-w-[250px] w-fit shadow-lg">
          <p className="label">
            <span className="font-medium">Date :</span>{" "}
            {getFormattedDate(new Date(payload[0].payload.date))}
          </p>
          <p className="desc">
            <span className="font-medium">Commit Count :</span> {payload[0].value}
          </p>
        </div>
      );
    }
  
    return null;
  };
  
  const ContributionCountByDayOfWeekToolTip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-5 rounded-md bg-customLight text-white text-sm max-w-[250px] w-fit shadow-lg">
          <p className="label">
            <span className="font-medium">Day :</span> {payload[0].payload.day}
          </p>
          <p className="desc">
            <span className="font-medium">Commit Count :</span> {payload[0].value}
          </p>
        </div>
      );
    }
  
    return null;
  };
  
  function LoadingBarChart() {  
    const barGraphLoadingData = [
      { day: "Monday", count: 3 },
      { day: "Tuesday", count: 5 },
      { day: "Wednesday", count: 7 },
      { day: "Thursday", count: 9 },
      { day: "Friday", count: 11 },
      { day: "Saturday", count: 13 },
      { day: "Sunday", count: 15 },
    ];
  
    return (
      <div className="pointer-events-none relative">
        <div className="grid place-items-center font-semibold text-base sm:text-lg absolute inset-0 z-1">
          Loading Data...
        </div>
        <BarChart
          width={730}
          height={250}
          data={barGraphLoadingData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{
            opacity: "0.25",
          }}
        >
          <CartesianGrid
            strokeDasharray="2 3"
            stroke={"#ffffff20"}
          />
          <XAxis dataKey="day" />
          <YAxis />
  
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<ContributionCountByDayOfWeekToolTip />}
          />
          <Bar dataKey="count" fill={"#404040"} />
        </BarChart>
      </div>
    );
  }
  
  function LoadingAreaChart() {  
    const areaChartLoadingData = [
      { shortDate: "09", contributionCount: 3 },
      { shortDate: "10", contributionCount: 5 },
      { shortDate: "11", contributionCount: 15 },
      { shortDate: "12", contributionCount: 9 },
      { shortDate: "13", contributionCount: 4 },
      { shortDate: "14", contributionCount: 13 },
      { shortDate: "15", contributionCount: 5 },
      { shortDate: "16", contributionCount: 4 },
      { shortDate: "17", contributionCount: 9 },
      { shortDate: "18", contributionCount: 2 },
      { shortDate: "19", contributionCount: 5 },
      { shortDate: "21", contributionCount: 6 },
      { shortDate: "22", contributionCount: 7 },
      { shortDate: "23", contributionCount: 3 },
      { shortDate: "24", contributionCount: 21 },
      { shortDate: "25", contributionCount: 4 },
      { shortDate: "26", contributionCount: 9 },
      { shortDate: "27", contributionCount: 2 },
    ];
  
    return (
      <div className="pointer-events-none relative">
        <div className="grid place-items-center font-semibold text-base sm:text-lg absolute inset-0 z-1">
          Loading Data...
        </div>
        <AreaChart
          width={730}
          height={250}
          data={areaChartLoadingData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{
            opacity: "0.25",
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={"#404040"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={"#404040"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="shortDate" />
          <YAxis />
          <CartesianGrid
            strokeDasharray="2 3"
            stroke={"#ffffff20"}
          />
          <Tooltip content={<ContributionsToolTip />} />
          <Area
            dot
            activeDot
            strokeWidth={3}
            type="monotone"
            dataKey="contributionCount"
            aria-label="count"
            stroke={"#404040"}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    );
  }