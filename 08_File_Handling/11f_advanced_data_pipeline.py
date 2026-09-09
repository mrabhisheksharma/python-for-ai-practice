"""
Advanced Data Cleansing Pipeline
--------------------------------
In AI training, you often deal with large datasets in JSONL format (JSON Lines),
where each line is a separate JSON object. Real-world data is messy. 
You will encounter missing keys, malformed JSON, and invalid values.

This script demonstrates combining File Handling with robust Exception Handling
to process a dataset, discard bad records, and save a clean dataset.
"""

import json
import os

INPUT_FILE = "dirty_training_data.jsonl"
OUTPUT_FILE = "clean_training_data.jsonl"

def process_training_data(input_path, output_path):
    stats = {
        "processed": 0,
        "saved": 0,
        "errors_json": 0,
        "errors_missing_key": 0,
        "errors_value": 0
    }

    try:
        # Open both the input (to read) and output (to write) files simultaneously
        with open(input_path, "r", encoding="utf-8") as infile, \
             open(output_path, "w", encoding="utf-8") as outfile:
            
            print(f"Processing data from {input_path}...")
            
            for line_number, line in enumerate(infile, start=1):
                line = line.strip()
                if not line:
                    continue  # Skip empty lines
                    
                stats["processed"] += 1
                
                try:
                    # 1. Catch malformed JSON (e.g. text that isn't JSON)
                    record = json.loads(line)
                    
                    # 2. Catch missing required keys
                    prompt = record["prompt"]
                    completion = record["completion"]
                    
                    # 3. Catch logical data issues (Custom validation)
                    if len(completion) < 3:
                        raise ValueError(f"Completion too short: '{completion}'")
                        
                    # If it passes all checks, write it to the clean file
                    json.dump(record, outfile)
                    outfile.write("\n")
                    stats["saved"] += 1
                    
                except json.JSONDecodeError:
                    print(f"Line {line_number}: Invalid JSON format. Skipping.")
                    stats["errors_json"] += 1
                    
                except KeyError as e:
                    print(f"Line {line_number}: Missing required key {e}. Skipping.")
                    stats["errors_missing_key"] += 1
                    
                except ValueError as e:
                    print(f"Line {line_number}: Data validation failed - {e}. Skipping.")
                    stats["errors_value"] += 1

    except FileNotFoundError:
        print(f"CRITICAL ERROR: The input file '{input_path}' was not found.")
        print("Please make sure it exists in the same directory.")
        return
    except PermissionError:
        print(f"CRITICAL ERROR: Permission denied when accessing files.")
        return
    except Exception as e:
        # Catch-all for any other unforeseen system errors
        print(f"CRITICAL ERROR: An unexpected error occurred: {e}")
        return

    # Print summary statistics
    print("\n--- Processing Summary ---")
    print(f"Total lines processed: {stats['processed']}")
    print(f"Clean records saved:   {stats['saved']}")
    print(f"Errors (JSON):         {stats['errors_json']}")
    print(f"Errors (Missing Keys): {stats['errors_missing_key']}")
    print(f"Errors (Validation):   {stats['errors_value']}")
    
    if stats['saved'] > 0:
        print(f"\nSuccess! Clean dataset saved to '{output_path}'.")

if __name__ == "__main__":
    process_training_data(INPUT_FILE, OUTPUT_FILE)
