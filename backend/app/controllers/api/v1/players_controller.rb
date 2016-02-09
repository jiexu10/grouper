class Api::V1::PlayersController < JSONAPI::ResourceController
  # def index
  #   players = []
  #   Player.all.each do |player|
  #     players << Api::V1::PlayerResource.new(player, nil)
  #   end
  #
  #   players_hash = JSONAPI::ResourceSerializer.new(Api::V1::PlayerResource).serialize_to_hash(players)
  #   render json: players_hash
  # end
  #
  # def create
  #   binding.pry
  #   player = Player.new(params['data']['attributes'])
  #   player.save
  #
  #   player_hash = JSONAPI::ResourceSerializer.new(Api::V1::PlayerResource).serialize_to_hash(Api::V1::PlayerResource.new(player, nil))
  #   render json: player_hash
  # end
  #
  # def show
  #   player = Player.find(params[:id])
  #
  #   player_hash = JSONAPI::ResourceSerializer.new(Api::V1::PlayerResource).serialize_to_hash(Api::V1::PlayerResource.new(player, nil))
  #   render json: player_hash
  # end
  #
  # private
  #
  # def player_params
  #   params.require(:data).permit(:attributes)
  # end
end
