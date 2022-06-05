import * as S from "./style";
import { BiHome } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { useSidebar } from "../../core/context/SidebarContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

export default function Sidebar() {
  const routes = [
    {
      icon: <BiHome />,
      name: "Dashboard",
      href: "/",
    },
    {
      icon: <BiHome />,
      name: "Vendas",
      href: "/vendas",
    },
    {
      icon: <BiHome />,
      name: "Rendimento",
      href: "/rendimento",
    },
    {
      icon: <BiHome />,
      name: "Pizzas",
      href: "/pizzas",
    },
  ];
  const { curPage, setCurPage, toggle, setToggle } = useSidebar();
  const router = useRouter();
  const isDesktopOrLaptop = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const curRoute = routes.find((item) => item.href === router.pathname);
    curRoute && setCurPage(routes.indexOf(curRoute));
  }, [router?.pathname]);

  const renderRoutes = () => {
    return routes.map((route, idx) => {
      return (
        <Link key={idx} href={route.href}>
          <S.Pages
            onClick={() => {
              setCurPage(idx);
            }}
            className={curPage === idx ? "active" : ""}
          >
            {route.icon} {route.name}
          </S.Pages>
        </Link>
      );
    });
  };

  return (
    <S.Sidebar>
      {!isDesktopOrLaptop && (
        <S.Icon onClick={() => setToggle(false)}>
          <FiX />
        </S.Icon>
      )}

      {renderRoutes()}
    </S.Sidebar>
  );
}

/**
 * dashboard {
 *  ver pizzas vendidas nos ultimos 30 dias
 *  5 pizzas mais vendidas
 *  recebimento => mensal && semanal && diario
 *  gastos => mensal && semanal && diario
 *  rendimento (recebido - gastos) => mensal && semanal && diario
 * }
 * --------------------
 * gastos {
 *  lista de gastos do mês => { data, valor, descrição }
 *  adicionar gasto
 * }
 * vendas {
 * lista de pizzas vendidas por dia => { sublista: { pizza, valor, qtd } }
 * adicionar venda
 * }
 * rendimento {
 *  lista de rendimento do mês => { status: entrada | saída, data, valor }
 *  valor da renda mensal e semanal
 * }
 * pizzas {
 *  lista dos sabores das pizzas
 *  adicionar sabor
 * }
 */
