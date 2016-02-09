require 'rails_helper'

RSpec.describe Api::V1::PlayersController do
  it 'can retrieve player data' do
    player = FactoryGirl.create(:player)
    expect(player).to be_a(Player)

    get "/api/v1/players/#{player.id}", format: :json

    json = JSON.parse(response.body)
    expect(json['data']).to_not be_nil
    expect(json['data']['id']).to_not be_nil
    expect(json['data']['type']).to_not be_nil
    expect(json['data']['attributes']['username']).to eq(player.username)
  end
end
