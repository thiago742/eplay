import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { isLoading: isLoadingAction, data: actionGames } =
    useGetActionGamesQuery()
  const { isLoading: isLoadingFight, data: fightGames } =
    useGetFightGamesQuery()
  const { isLoading: isLoadingSports, data: sportsGames } =
    useGetSportsGamesQuery()
  const { isLoading: isLoadingSimulation, data: simulationGames } =
    useGetSimulationGamesQuery()
  const { isLoading: isLoadingRPG, data: rpgGames } = useGetRPGGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}
export default Categories
