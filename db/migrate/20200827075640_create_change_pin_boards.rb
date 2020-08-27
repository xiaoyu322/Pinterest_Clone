class CreateChangePinBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :change_pin_boards do |t|
      remove_index :pin_boards, :board_id
      remove_index :pin_boards, :pin_id
      add_index :pin_boards, :board_id
      add_index :pin_boards, :pin_id
      t.timestamps
    end
  end
end
